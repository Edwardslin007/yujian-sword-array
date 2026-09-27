// 万剑阵 · 大庚剑阵 1:1 原版动力学与形态驱动（深度融合蓝色仙道美学与挥剑齐发）
// 1. 500 把大庚原版飞剑精密几何体与双 InstancedMesh 网格
// 2. 原版世界坐标系（R_shield=18, R_lotus=24, R_dageng=30, Z_cam=35~75）
// 3. 原版 Boids 到达减速动力学 + 分离力 + 300点历史路径延展 (extendPath)
// 4. 四大手势绝阵 1:1 动态还原（剑盾护体/莲花现世/大庚剑阵/游龙随行）
// 5. 保留自研特性：疾挥万剑齐发 (Swipe Burst) + 剑气流光拖尾 + 纯正青蓝星空色系
import * as THREE from 'three';
import { FX } from '../fx.config.js';
import { TrailRenderer } from './trail.js';
import { buildDagengSwordGeometry, buildDagengAuraGeometry } from './swordModel.js';
import { MagicCircle } from './magicCircle.js';
import { DivineLightning } from './divineLightning.js';

const simplex = {
  noise3D: (x, y, z) =>
    Math.sin(x * 1.2 + y * 0.8) *
    Math.cos(y * 1.1 + z * 0.9) *
    Math.sin(z * 0.7 + x * 1.3),
};

// 热循环共享临时向量（999 剑 × 60fps 下逐剑 new 会造成 GC 抖动 = "手感不够实时"）
const _tgt = new THREE.Vector3();
const _look = new THREE.Vector3();
const _des = new THREE.Vector3();
const _steer = new THREE.Vector3();
const _sep = new THREE.Vector3();

const MOBILE =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;

// 实例色（v10d）：材质为白、颜色由逐实例给出——默认青蓝，比心阵 ❤ 染红
const SWORD_CYAN = new THREE.Color(0x00e5ff);
const AURA_CYAN = new THREE.Color(0x38bdf8);
const SWORD_RED = new THREE.Color(0xff2b3c);
const AURA_RED = new THREE.Color(0xff1e30);

export const CONFIG = {
  swordCount: MOBILE ? 400 : 999,
  pathHistoryLength: 600,
  maxSpeed: 25,
  sprintSpeed: 50,
  steerForce: 28,
  separationDist: 3,
  separationForce: 10,
  noiseScale: 0.3,
  noiseStrength: 1,
  shieldRadius: 18,
  shieldOrbitSpeed: 2.5,
  lotusRadius: 24,
  lotusRotateSpeed: 2.5,
  dagengRadius: 30,
  dagengHeight: 46,      // v10e：20→46，竖向带宽铺满全屏（修上半屏空旷）
  dagengRotateSpeed: 0.2,
};

const FORMATION = {
  IDLE: 'LOTUS',
  FIST: 'BALL',           // 握拳 → 仙剑球（实心剑丸，v8 改）
  TWO_FINGERS: 'DRAGON',
  OPEN_PALM: 'LOTUS',
  THUMB_UP: 'THUMBSUP',   // 点赞 → 万剑比👍（v8 改，原剑柱）
  SHAKA: 'HEXAGRAM',
  ROCK: 'DAGENG',
  PALM_DOWN: 'RAIN',
  DOUBLE_FIST: 'BAGUA',   // v7 恢复自研八卦卦符阵（v6d），大庚剑阵归 ROCK
  CROSSED_HANDS: 'INFINITY',
  HANDS_PUSH: 'EXPLODE',
  HANDS_CUP: 'ENERGY_BALL',
  SALUTE: 'QIANTANG',     // 敬礼 → 钱塘二字剑阵（v8 新增）
  FINGER_HEART: 'WOAI',   // 比心 → 我❤️钱塘横幅字阵（v10 新增）
  THREE_FINGERS: 'LETTERS',  // 隐藏：三指 → Molispark（不进 attract，左栏不展示）
};

// ---- 形状阵（v8 通用化）：离屏 canvas 画形状（文字/图形）→ 实心掩码均匀采样 N 点。
// 排版/造型由画布负责，剑阵只铺点，永远可读。首次进入对应阵型时才构建。
// 采样点按墨迹包围盒居中（构图不偏），浅拱顶给字面微凸立体感，
// 固定伪随机小倾角（剑阵参差感；确定性，不进热循环）。
const LETTER_WORD = 'Molispark';

function buildMaskLayout(n, w, h, worldW, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  draw(cv, cx);
  const data = cx.getImageData(0, 0, w, h).data;
  // 掩码像素（2px 步进，控制点云规模）
  const pts = [];
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      if (data[(y * w + x) * 4 + 3] > 96) pts.push(x, y);
    }
  }
  const m = pts.length / 2;
  // 确定性洗牌（固定种子 LCG）：打散光栅序后等距取样 = 蓝噪均匀分布，
  // 消除等距索引在光栅序上的对角干涉纹（剑云呈柔性和噪声质感）
  let seed = 1234567;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  for (let k = m - 1; k > 0; k--) {
    const r = Math.floor(rnd() * (k + 1));
    const tx = pts[k * 2], ty = pts[k * 2 + 1];
    pts[k * 2] = pts[r * 2]; pts[k * 2 + 1] = pts[r * 2 + 1];
    pts[r * 2] = tx; pts[r * 2 + 1] = ty;
  }
  const px = new Float32Array(n), py = new Float32Array(n);
  const pz = new Float32Array(n), rot = new Float32Array(n);
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let k = 0; k < m; k++) {
    const x = pts[k * 2], y = pts[k * 2 + 1];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  const scale = worldW / Math.max(1, maxX - minX);
  const cxm = (minX + maxX) / 2, cym = (minY + maxY) / 2;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(i * (m / n)) % m;
    const x = pts[j * 2], y = pts[j * 2 + 1];
    // 确定性微抖（±1.5px）：等距索引采样在光栅序上会走出干涉纹，抖动打散
    const s1 = Math.sin(i * 12.9898) * 43758.5453;
    const s2 = Math.sin(i * 78.233) * 12543.123;
    const jx = (s1 - Math.floor(s1) - 0.5) * 3;
    const jy = (s2 - Math.floor(s2) - 0.5) * 3;
    px[i] = (x + jx - cxm) * scale;
    py[i] = -(y + jy - cym) * scale;
    // 浅拱顶：形状中部微凸，相机动时有立体感
    pz[i] = Math.sin(((x - minX) / Math.max(1, maxX - minX)) * Math.PI) * 1.2;
    // 固定伪随机小倾角（剑阵参差感；确定性，不进热循环）
    rot[i] = Math.sin(i * 12.9898) * 0.14;
  }
  return { px, py, pz, rot };
}

// 真字体文字阵：canvas 渲染单词后采样。families 可指定字体栈（fatten>0 时对笔画
// 描边增肥）。CJK 笔画密、999 剑有限——笔画越粗越"实"：默认楷体栈适合拉丁字阵，
// 中文双字建议传黑体栈（雅黑 Bold 笔画粗壮均匀，剑云读得出实心笔画）。
function buildTextLayout(n, text, worldW = 52, fatten = 0, families) {
  const fs = 300;                        // 采样字号（越大掩码越细）
  const pad = fs * 0.25;
  const probe = document.createElement('canvas').getContext('2d');
  const fontSpec = `bold ${fs}px ${families || '"YujianKai", "STKaiti", "KaiTi", "Microsoft YaHei", serif'}`;
  probe.font = fontSpec;
  const w = Math.ceil(probe.measureText(text).width) + pad * 2;
  const h = Math.ceil(fs * 1.35);
  return buildMaskLayout(n, w, h, worldW, (cv, cx) => {
    cx.font = fontSpec;
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillStyle = '#fff';
    cx.fillText(text, w / 2, h / 2);
    if (fatten > 0) {
      cx.lineWidth = fatten; cx.strokeStyle = '#fff';
      cx.lineJoin = 'round'; cx.lineCap = 'round';
      cx.strokeText(text, w / 2, h / 2);
    }
  });
}

// 轮廓字阵（v8 钱塘）：边界提取——实心像素与空邻接的每条边即轮廓边（含端点中点），
// 沿边点云等距取 n 点。同面积下轮廓线的"线性密度"比实心填充高一个量级：
// 999 剑描粗黑体轮廓 = 霓虹灯管字，比铺满剪影可读得多。
function buildContourLayout(n, w, h, worldW, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  draw(cv, cx);
  const data = cx.getImageData(0, 0, w, h).data;
  const solid = (x, y) => x >= 0 && y >= 0 && x < w && y < h && data[(y * w + x) * 4 + 3] > 96;
  const edges = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (!solid(x, y)) continue;
      if (!solid(x, y - 1)) edges.push(x + 0.5, y);
      if (!solid(x, y + 1)) edges.push(x + 0.5, y + 1);
      if (!solid(x - 1, y)) edges.push(x, y + 0.5);
      if (!solid(x + 1, y)) edges.push(x + 1, y + 0.5);
    }
  }
  const m = edges.length / 2;
  const px = new Float32Array(n), py = new Float32Array(n);
  const pz = new Float32Array(n), rot = new Float32Array(n);
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let k = 0; k < m; k++) {
    const x = edges[k * 2], y = edges[k * 2 + 1];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  const scale = worldW / Math.max(1, maxX - minX);
  const cxm = (minX + maxX) / 2, cym = (minY + maxY) / 2;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(i * (m / n)) % m;
    const x = edges[j * 2], y = edges[j * 2 + 1];
    px[i] = (x - cxm) * scale;
    py[i] = -(y - cym) * scale;
    // 微拱顶：几乎放平（轮廓线阵拱起会破坏笔画投影），只留一点深度呼吸
    pz[i] = Math.sin(((x - minX) / Math.max(1, maxX - minX)) * Math.PI) * 0.4;
    // 固定伪随机小倾角（剑阵参差感；确定性，不进热循环）
    rot[i] = Math.sin(i * 12.9898) * 0.14;
  }
  return { px, py, pz, rot };
}

// 钱塘二字（v9 竖排大字）：加粗黑体逐字竖排（钱上塘下，武侠片头式），
// 轮廓提取后 999 剑描霓虹灯管笔画。竖排让单字宽度只占画面一半、字高逼近全屏，
// 比横排"两个小字"形象得多；黑体笔画粗壮方正，轮廓线最可读。
function buildQiantangLayout(n) {
  const fs = 340;
  const families = '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", "YujianKai", "STKaiti", "KaiTi", sans-serif';
  const w = Math.ceil(fs * 1.25), h = Math.ceil(fs * 2.4);
  return buildContourLayout(n, w, h, 14, (cv, cx) => {
    cx.font = `bold ${fs}px ${families}`;
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillStyle = '#fff';
    cx.fillText('钱', w / 2, h * 0.27);
    cx.fillText('塘', w / 2, h * 0.73);
  });
}

// 程序化心形（比心阵用，不依赖 emoji 字体全平台一致）：底尖 + 双圆弧瓣，
// 两个三次贝塞尔画完，实心填充后走轮廓提取。
function drawHeart(cx, x, y, w2, h2) {
  cx.beginPath();
  cx.moveTo(x, y + h2 * 0.35);
  cx.bezierCurveTo(x + w2 * 0.5, y - h2 * 0.1, x + w2 * 0.36, y - h2 * 0.55, x, y - h2 * 0.16);
  cx.bezierCurveTo(x - w2 * 0.36, y - h2 * 0.55, x - w2 * 0.5, y - h2 * 0.1, x, y + h2 * 0.35);
  cx.closePath();
  cx.fill();
}

// 网格点阵掩码（v10 我❤️钱塘横幅用）：固定像素步长在墨迹内均匀布点（LED 点阵风），
// 洗牌后等距取样。多字少剑场景下比"描轮廓"可读得多——点直接落在笔画上，
// 读出来是实心笔画而不是空心双线。yStretch 可做纵向拉伸（横排大字更高更醒目）。
// tagFn(x,y) 可选：给每个点打标记（如"属于 ❤"），输出与剑一一对应的 flags 数组。
function buildGridMaskLayout(n, w, h, worldW, step, draw, yStretch = 1, tagFn = null) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  draw(cv, cx);
  const data = cx.getImageData(0, 0, w, h).data;
  const solid = (x, y) => x >= 0 && y >= 0 && x < w && y < h && data[(y * w + x) * 4 + 3] > 96;
  const pts = [];
  const ptFlags = tagFn ? [] : null;
  for (let y = step >> 1; y < h; y += step) {
    for (let x = step >> 1; x < w; x += step) {
      if (solid(x, y)) {
        pts.push(x, y);
        if (ptFlags) ptFlags.push(tagFn(x, y) ? 1 : 0);
      }
    }
  }
  const m = pts.length / 2;
  let seed = 987654321;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  for (let k = m - 1; k > 0; k--) {
    const r = Math.floor(rnd() * (k + 1));
    const tx = pts[k * 2], ty = pts[k * 2 + 1];
    pts[k * 2] = pts[r * 2]; pts[k * 2 + 1] = pts[r * 2 + 1];
    pts[r * 2] = tx; pts[r * 2 + 1] = ty;
    if (ptFlags) { const tf = ptFlags[k]; ptFlags[k] = ptFlags[r]; ptFlags[r] = tf; }
  }
  const px = new Float32Array(n), py = new Float32Array(n);
  const pz = new Float32Array(n), rot = new Float32Array(n);
  const flags = tagFn ? new Uint8Array(n) : null;
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let k = 0; k < m; k++) {
    const x = pts[k * 2], y = pts[k * 2 + 1];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  const scale = worldW / Math.max(1, maxX - minX);
  const cxm = (minX + maxX) / 2, cym = (minY + maxY) / 2;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(i * (m / n)) % m;
    const x = pts[j * 2], y = pts[j * 2 + 1];
    const s1 = Math.sin(i * 12.9898) * 43758.5453;
    const jx = (s1 - Math.floor(s1) - 0.5) * step * 0.3;
    px[i] = (x + jx - cxm) * scale;
    py[i] = -(y - cym) * scale * yStretch;
    pz[i] = Math.sin(((x - minX) / Math.max(1, maxX - minX)) * Math.PI) * 0.8;
    rot[i] = Math.sin(i * 12.9898) * 0.14;
    if (flags) flags[i] = ptFlags[j];
  }
  return { px, py, pz, rot, flags };
}

// 我❤️钱塘（v10 比心阵）：四字横排——v10c 放大版：字距收紧（gap 0.3→0.18fs）、
// 世界宽度按屏幕宽高比自适应（≈可见宽度九成，zoom≤75 上限内尽量铺满）、
// 字形纵向拉伸 1.1。三个汉字用加粗黑体，心形程序化绘制；LED 点阵铺在笔画上。
function buildWoAiQiantangLayout(n) {
  const fs = 300;
  const gap = fs * 0.18;
  const families = '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", "YujianKai", "STKaiti", "KaiTi", sans-serif';
  const probe = document.createElement('canvas').getContext('2d');
  const fontSpec = `bold ${fs}px ${families}`;
  probe.font = fontSpec;
  const cjkW = Math.ceil(Math.max(
    probe.measureText('我').width, probe.measureText('钱').width, probe.measureText('塘').width));
  const glyphW = Math.max(cjkW, Math.ceil(fs * 0.95));
  const pad = fs * 0.22;
  const w = Math.ceil(pad * 2 + glyphW * 4 + gap * 3);
  const h = Math.ceil(fs * 1.35);
  // 可见宽度 = 2 × zoom上限(75) × tan(fov/2) × 宽高比；留 8% 边距防相机微动裁字
  const visibleW = 2 * 75 * Math.tan(Math.PI / 7.2) * (innerWidth / Math.max(1, innerHeight));
  const worldW = Math.min(118, visibleW * 0.92);
  // 字位坐标提升到外层作用域（tagFn 也要用 c1，不能留在 draw 回调里）
  const cy0 = h * 0.53;
  const c0 = pad + glyphW * 0.5;
  const c1 = pad + glyphW * 1.5 + gap;
  const c2 = pad + glyphW * 2.5 + gap * 2;
  const c3 = pad + glyphW * 3.5 + gap * 3;
  return buildGridMaskLayout(n, w, h, worldW, 11, (cv, cx) => {
    cx.font = fontSpec;
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillStyle = '#fff';
    cx.fillText('我', c0, cy0);
    drawHeart(cx, c1, cy0, fs * 0.92, fs * 0.92);
    cx.fillText('钱', c2, cy0);
    cx.fillText('塘', c3, cy0);
    // ❤ 区域标记（x 落在心形横跨范围内 → 剑染红）
  }, 1.1, (x) => x > c1 - fs * 0.5 && x < c1 + fs * 0.5);
}

// 点赞造型 👍（v9 按参考图重绘，2D 草稿迭代定稿）：左侧竖长袖口 + 拳主体 +
// 右上肩块（食指丘，与拇指之间自然形成虎口凹口）+ 右缘四指节圆弧 +
// 加粗竖拇指（微右倾弧线）；袖口/拳之间刻缝分界。不依赖 emoji 字体。
function buildThumbsUpLayout(n) {
  return buildMaskLayout(n, 460, 460, 17, (cv, cx) => {
    cx.fillStyle = '#fff';
    cx.strokeStyle = '#fff';
    const rr = (x, y, w2, h2, r) => {
      cx.beginPath();
      if (cx.roundRect) { cx.roundRect(x, y, w2, h2, r); cx.fill(); }
      else cx.fillRect(x, y, w2, h2);
    };
    rr(55, 173, 103, 173, 22);                 // 袖口
    rr(155, 190, 250, 172, 30);                // 拳主体（顶缘低）
    rr(295, 150, 130, 92, 24);                 // 右上肩块（食指丘）
    for (const [ky, kr] of [[188, 30], [242, 32], [294, 32], [342, 30]]) {
      cx.beginPath(); cx.arc(402, ky, kr, 0, Math.PI * 2); cx.fill();  // 右缘指节
    }
    cx.lineCap = 'round'; cx.lineWidth = 74;
    cx.beginPath(); cx.moveTo(245, 205); cx.quadraticCurveTo(233, 108, 258, 42); cx.stroke();  // 拇指
    cx.globalCompositeOperation = 'destination-out';
    cx.lineWidth = 7;
    cx.beginPath(); cx.moveTo(158, 182); cx.lineTo(158, 338); cx.stroke();  // 袖口/拳分界缝
    cx.globalCompositeOperation = 'source-over';
  });
}


export class Volley {
  constructor(scene) {
    this.scene = scene;
    this.swordTotal = CONFIG.swordCount;
    this.max = this.swordTotal;

    // 1. 大庚原版飞剑几何体与光环
    const geometry = buildDagengSwordGeometry();
    const auraGeometry = buildDagengAuraGeometry();

    // 纯正青蓝仙道色板（v10d：颜色下沉到逐实例——比心阵可把 ❤ 剑染红）
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });

    this.auraMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.InstancedMesh(geometry, this.material, this.swordTotal);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    this.aura = new THREE.InstancedMesh(auraGeometry, this.auraMaterial, this.swordTotal);
    this.aura.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.aura.frustumCulled = false;
    scene.add(this.aura);

    // 实例色初始化：默认全体青蓝（材质已改白，颜色由实例色给出）
    for (let i = 0; i < this.swordTotal; i++) {
      this.mesh.setColorAt(i, SWORD_CYAN);
      this.aura.setColorAt(i, AURA_CYAN);
    }
    this._tinted = false;

    this.meshMid = this.aura;
    this.meshOuter = this.aura;

    // 2. 特效子系统
    this.magicCircle = new MagicCircle(scene);
    this.divineLightning = new DivineLightning(scene, 100);

    // 3. 物理状态（大庚原版 Vector3 阵列）
    this.positions = [];
    this.velocities = [];
    this.dummy = new THREE.Object3D();

    for (let i = 0; i < this.swordTotal; i++) {
      this.positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10 - 5
        )
      );
      this.velocities.push(new THREE.Vector3());
    }

    // 4. 历史路径
    this.pathHistory = [];
    for (let k = 0; k < CONFIG.pathHistoryLength; k++) {
      this.pathHistory.push(new THREE.Vector3(0, 0, 0));
    }
    this.lastDirection = new THREE.Vector3(0, 0, 0);
    this._origin = new THREE.Vector3(0, 0, 0);

    // 5. 交互状态
    this.formation = 'LOTUS';
    this.handPos = new THREE.Vector3(0, 0, 0);
    this.pointDir = new THREE.Vector3(1, 0, 0);
    this.handVel = { vx: 0, vy: 0, speed: 0 };
    this.palmN = new THREE.Vector3(0, 0, 1);
    this.isTracking = false;
    // 6. 齐发爆发系统（自研优势保留）
    this.burstMode = new Uint8Array(this.swordTotal);
    this.burstAge = new Float32Array(this.swordTotal);
    this.burstLife = new Float32Array(this.swordTotal);
    this.scl = new Float32Array(this.swordTotal).fill(1);   // 按剑尺度（八卦/大庚主剑等非均匀缩放）
    this._cursor = 0;

    // 8. 双手上下文（聚能球/双手阵型用）
    this.handsCX = 0; this.handsCY = 0; this.handsDist = 0.3;

    // 7. 剑气拖尾（SlashSaber）
    this.trails = [];
    this.trailFree = [];

    // 6b. 形状阵（Molispark/点赞/钱塘）：掩码布局按阵型缓存，首次进入时才构建
    this._shapes = {};            // 阵型名 → {px,py,pz,rot}
    this._activeShape = null;     // 当前形状布局（进入形状阵时设置）
    this._shapeAge = 0;           // 形状阵入场时间轴（从进入阵型开始计秒）

    for (let i = 0; i < 20; i++) {
      const mat = TrailRenderer.createGlowMaterial(
        new THREE.Color(0.4, 0.9, 1.0),
        new THREE.Color(0.0, 0.45, 1.0)
      );
      mat.uniforms.headColor.value.set(0.4, 0.9, 1.0, 0.6);
      const tr = new TrailRenderer(scene, false);
      tr.initialize(mat, 22, false, 0.9, null, null);
      tr.user = { idx: -1 };
      scene.add(tr.mesh);
      tr.deactivate();
      this.trails.push(tr);
      this.trailFree.push(tr);
    }

    // 兼容对象
    this.bigSword = new THREE.Group();
    this.bigSword.visible = false;
    scene.add(this.bigSword);
    this.hexLines = [];
  }

  // 逐实例染色：flags[i]=1 → 剑 i 红（❤），否则还原青蓝。离开字阵时传 null 全还原。
  _tintSwords(flags) {
    this._tinted = !!flags;
    for (let i = 0; i < this.swordTotal; i++) {
      const red = !!(flags && flags[i]);
      this.mesh.setColorAt(i, red ? SWORD_RED : SWORD_CYAN);
      this.aura.setColorAt(i, red ? AURA_RED : AURA_CYAN);
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    if (this.aura.instanceColor) this.aura.instanceColor.needsUpdate = true;
  }

  setMode(gesture, handPos) {
    const f = FORMATION[gesture] || 'LOTUS';
    if (handPos) {
      this.handPos.set(handPos.x, handPos.y, handPos.z || 0);
    }
    if (f === this.formation) return;
    this.formation = f;
    const N = this.swordTotal;
    // 入场动作：爆裂波沿斐波那契球面赋予径向初速（steering 会把剑群收回手位）
    if (f === 'EXPLODE') {
      for (let i = 0; i < N; i++) {
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
        const sp = 30 + Math.random() * 18;
        this.velocities[i].set(
          Math.sin(phi) * Math.cos(theta) * sp,
          Math.cos(phi) * sp,
          Math.sin(phi) * Math.sin(theta) * sp * 0.6
        );
      }
    } else if (f === 'RAIN') {
      // 下压全屏剑雨初切入：999 剑瞬间铺展全屏天际，自九天轰然直插九幽
      for (let i = 0; i < N; i++) {
        const x = (Math.random() - 0.5) * 76;
        const y = 20 + Math.random() * 24;
        const z = (Math.random() - 0.5) * 28;
        this.positions[i].set(x, y, z);
        const fallSp = -(48 + Math.random() * 24);
        this.velocities[i].set((Math.random() - 0.5) * 1.5, fallSp, (Math.random() - 0.5) * 1.5);
      }
    } else if (f === 'LETTERS' || f === 'THUMBSUP' || f === 'QIANTANG' || f === 'WOAI') {
      // 首次进入才构建形状掩码（字体此时已加载完毕）
      if (!this._shapes[f]) {
        this._shapes[f] =
          f === 'LETTERS' ? buildTextLayout(N, LETTER_WORD, 52) :
          f === 'THUMBSUP' ? buildThumbsUpLayout(N) :
          f === 'WOAI' ? buildWoAiQiantangLayout(N) :
          buildQiantangLayout(N);
      }
      this._activeShape = this._shapes[f];
      // v10d：比心阵把 ❤ 区域的剑染红；离开任何已染色阵型还原全青
      if (f === 'WOAI' && this._activeShape.flags) this._tintSwords(this._activeShape.flags);
      else if (this._tinted) this._tintSwords(null);
      // 形状阵入场：万剑先向天环炸开——径向外冲 + 切向旋量初速
      this._shapeAge = 0;
      for (let i = 0; i < N; i++) {
        const ratio = i / N;
        const phi = Math.acos(1 - 2 * ratio);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const R = 26 + (i % 7) * 1.4;                 // 天环半径（带起伏）
        const a = theta;                              // 圆环角
        const px = Math.cos(a) * R * Math.sin(phi);
        const py = Math.cos(phi) * R;
        const pz = Math.sin(a) * R * Math.sin(phi) * 0.8;
        this.velocities[i].set(px * 0.6, py * 0.6, pz * 0.6);  // 径向外冲
        this.velocities[i].x += -Math.sin(a) * 12;
        this.velocities[i].y += Math.cos(a) * 8;
      }
    }
  }

  setHands(hand, hand2, handsCenter, handsDist, dir, palmN, pointDir, handVel) {
    if (hand) {
      this.handPos.set(hand.x, hand.y, hand.z || 0);
    }
    if (handsCenter) { this.handsCX = handsCenter.x; this.handsCY = handsCenter.y; }
    this.handsDist = handsDist || 0.3;
    if (pointDir && (Math.abs(pointDir.x) > 0.01 || Math.abs(pointDir.y) > 0.01)) {
      this.pointDir.set(pointDir.x, pointDir.y, pointDir.z || 0);
    } else if (dir) {
      this.pointDir.set(dir.x, dir.y, dir.z || 0);
    }
    if (palmN) {
      this.palmN.set(palmN.x, palmN.y, palmN.z || 1);
    }
    if (handVel) {
      this.handVel = handVel;
    }
  }

  // 历史路径平滑更新：手移动时记录真实轨迹（复用 ring 槽，禁止 clone）
  updatePath(pos) {
    const last = this.pathHistory[0];
    const diff = _des.copy(pos).sub(last);
    const dist = diff.length();
    if (dist > 0.08) {
      this.lastDirection.copy(diff.normalize());
      const slot = this.pathHistory.pop();
      slot.copy(pos);
      this.pathHistory.unshift(slot);
    }
  }

  // 手静止时：平滑衰减，避免手停了剑阵继续盲目向前飙飞
  extendPath() {
    if (this.lastDirection.length() < 0.01) return;
    const last = this.pathHistory[0];
    this.lastDirection.multiplyScalar(0.96);
    if (this.lastDirection.length() > 0.05) {
      const slot = this.pathHistory.pop();
      slot.copy(last).addScaledVector(this.lastDirection, 0.08);
      this.pathHistory.unshift(slot);
    }
  }

  // 疾挥齐发：自适应抽调约 40% 飞剑（999 剑抽 400 把）雷霆齐发，其余在阵飞剑受风压动量倾斜
  burst(ox, oy, dx, dy, peak) {
    const count = Math.min(Math.floor(this.swordTotal * 0.40), 400);
    const perpx = -dy, perpy = dx;
    for (let k = 0; k < count; k++) {
      const i = (this._cursor++) % this.swordTotal;
      this.burstMode[i] = 1;
      this.burstAge[i] = 0;
      this.burstLife[i] = 1.6 + Math.random() * 0.8;
      const sp = 75.0 + Math.random() * 25.0;
      const u = (k / (count - 1) || 0) - 0.5;
      this.velocities[i].set((dx + perpx * u * 0.28) * sp, (dy + perpy * u * 0.28) * sp, (Math.random() - 0.5) * 6.0);

      if (k < 16 && this.trailFree.length) {
        const tr = this.trailFree.pop();
        tr.user.idx = i;
        tr.age = 0;
        tr.reset();
        tr.activate();
      }
    }
    // 其余留在阵中的飞剑随挥舞气浪产生整体冲量偏移（极强挥剑破空风压感）
    const pushFactor = Math.min(peak * 12.0, 22.0);
    for (let i = 0; i < this.swordTotal; i++) {
      if (this.burstMode[i] === 0) {
        this.velocities[i].x += dx * pushFactor * (0.4 + Math.random() * 0.6);
        this.velocities[i].y += dy * pushFactor * (0.4 + Math.random() * 0.6);
      }
    }
  }

  launchCloud(dx, dy) {
    // 剑指齐发：以剑指指尖朝向(pointDir)为主(75%)、挥舞动量为辅(25%)，指哪飞哪！
    let fx = dx, fy = dy;
    if (this.pointDir && (Math.abs(this.pointDir.x) > 0.05 || Math.abs(this.pointDir.y) > 0.05)) {
      fx = this.pointDir.x * 0.75 + dx * 0.25;
      fy = this.pointDir.y * 0.75 + dy * 0.25;
      const fl = Math.hypot(fx, fy) || 1;
      fx /= fl; fy /= fl;
    }
    const sp = 75.0 + Math.random() * 15.0;
    let trails = 0;
    for (let i = 0; i < this.swordTotal; i++) {
      this.burstMode[i] = 1;
      this.burstAge[i] = 0;
      this.burstLife[i] = 1.5 + Math.random() * 0.8;
      const w = (Math.random() - 0.5) * 0.20;
      this.velocities[i].set((fx - fy * w) * sp, (fy + fx * w) * sp, (Math.random() - 0.5) * 6.0);
      if (i < 16 && this.trailFree.length) {
        const tr = this.trailFree.pop();
        tr.user.idx = i;
        tr.age = 0;
        tr.reset();
        tr.activate();
        trails++;
      }
    }
    return trails;
  }

  // 供 CameraController 计算自适应包围圈
  getFormationBounds() {
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;

    for (let i = 0; i < this.swordTotal; i++) {
      const p = this.positions[i];
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
      if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
    }

    const center = new THREE.Vector3((minX + maxX) * 0.5, (minY + maxY) * 0.5, (minZ + maxZ) * 0.5);
    const size = Math.max(maxX - minX, maxY - minY, maxZ - minZ) * 0.5;
    return { center, size: Math.max(8.0, Math.min(size, 45.0)) };
  }

  update(dt, t, personPresent) {
    this.isTracking = !!personPresent;
    const time = t;
    const delta = 1 / 60; // 大庚原版固定 60fps 积分步长，手感最平稳丝滑

    // 1. 无手势时自动盘旋（默认 LOTUS）
    let currentTarget = this.handPos;
    if (!this.isTracking) {
      currentTarget = this._origin;
      const slot = this.pathHistory.pop();
      slot.copy(this._origin);
      this.pathHistory.unshift(slot);
    } else if (this.formation === 'DRAGON') {
      this.extendPath();
    }

    const gestureMode = this.formation;
    if (gestureMode === 'LETTERS' || gestureMode === 'THUMBSUP' ||
        gestureMode === 'QIANTANG' || gestureMode === 'WOAI') {
      this._shapeAge += delta;   // 必须在逐剑循环外累加（误入循环会一帧跳 16s）
    }
    const dummy = this.dummy;

    // 2. 逐剑更新（大庚原版 1:1 精密物理与阵型数学）
    for (let i = 0; i < this.swordTotal; i++) {
      const pos = this.positions[i];
      const vel = this.velocities[i];
      const target = _tgt.set(0, 0, 0);

      // 齐发爆发飞行中的飞剑处理
      if (this.burstMode[i] === 1) {
        this.burstAge[i] += dt;
        pos.addScaledVector(vel, dt);
        if (this.burstAge[i] >= this.burstLife[i]) {
          this.burstMode[i] = 2; // 归阵
        }
        dummy.position.copy(pos);
        dummy.lookAt(_look.copy(pos).add(vel));
        dummy.scale.set(1.0, 1.0, 1.0);
        dummy.updateMatrix();
        this.mesh.setMatrixAt(i, dummy.matrix);
        this.aura.setMatrixAt(i, dummy.matrix);
        continue;
      } else if (this.burstMode[i] === 2) {
        const dxx = currentTarget.x - pos.x, dyy = currentTarget.y - pos.y, dzz = currentTarget.z - pos.z;
        const d = Math.hypot(dxx, dyy, dzz) + 1e-4;
        vel.x += (dxx / d * 45.0 - vel.x) * Math.min(1, 6 * dt);
        vel.y += (dyy / d * 45.0 - vel.y) * Math.min(1, 6 * dt);
        vel.z += (dzz / d * 45.0 - vel.z) * Math.min(1, 6 * dt);
        pos.addScaledVector(vel, dt);
        if (d < 5.0) {
          this.burstMode[i] = 0;
        }
        dummy.position.copy(pos);
        dummy.lookAt(_look.copy(pos).add(vel));
        dummy.scale.set(1.0, 1.0, 1.0);
        dummy.updateMatrix();
        this.mesh.setMatrixAt(i, dummy.matrix);
        this.aura.setMatrixAt(i, dummy.matrix);
        continue;
      }

      // ============ 大庚四大绝阵数学 ============
      if (gestureMode === 'SHIELD') {
        // ---- 护盾模式：R=18 斐波那契球高速公转（09-11 修 attract：去掉 isTracking 门槛，
        // 否则无人告示 FIST 落成游龙 blob）----
        const phi = Math.acos(1 - (2 * (i + 0.5)) / CONFIG.swordCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const orbitX =
          CONFIG.shieldRadius *
          Math.sin(phi) *
          Math.cos(theta + time * CONFIG.shieldOrbitSpeed);
        const orbitY =
          CONFIG.shieldRadius *
          Math.sin(phi) *
          Math.sin(theta + time * CONFIG.shieldOrbitSpeed);
        const orbitZ = CONFIG.shieldRadius * Math.cos(phi);

        const rotatedX =
          orbitX * Math.cos(time * 0.3) - orbitZ * Math.sin(time * 0.3);
        const rotatedZ =
          orbitX * Math.sin(time * 0.3) + orbitZ * Math.cos(time * 0.3);

        target.set(
          currentTarget.x + rotatedX,
          currentTarget.y + orbitY,
          currentTarget.z + rotatedZ
        );
        target.x += Math.sin(time * 3 + i) * 0.2;
        target.y += Math.cos(time * 3 + i * 0.7) * 0.2;
      } else if (gestureMode === 'LOTUS') {
        // ---- 莲花模式：斐波那契黄金角螺旋，中心镂空 ----
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
        const maxRadius = CONFIG.lotusRadius;
        const minRadius = 6;

        const tr = i / (CONFIG.swordCount - 1);
        const rRatio = Math.sqrt(tr);
        const r = minRadius + (maxRadius - minRadius) * rRatio;

        const theta = i * goldenAngle + time * CONFIG.lotusRotateSpeed;
        const breathe = 1 + Math.sin(time * 2) * 0.05;
        const currentR = r * breathe;
        // 1. 手掌三维姿态倾角：掌心翻转时剑盘在三维空间立体倾斜
        const basePlaneX = currentR * Math.cos(theta);
        const basePlaneY = currentR * Math.sin(theta);
        const tiltZ = (basePlaneX * (this.palmN?.x || 0) + basePlaneY * (this.palmN?.y || 0)) * 0.5;

        // 2. 划动手势动作风动追踪：手在空中移动/划动时，剑群顺着划动速度矢量强烈拉伸成流体形变
        const vx = this.handVel?.vx || 0, vy = this.handVel?.vy || 0;
        const windX = vx * (0.8 + rRatio * 1.2) * 20.0;
        const windY = vy * (0.8 + rRatio * 1.2) * 20.0;

        const x = basePlaneX + windX;
        const y = basePlaneY + windY;
        const z = Math.sin(time * 2 + i * 0.1) * 0.25 + tiltZ;

        target.set(
          currentTarget.x + x,
          currentTarget.y + y,
          currentTarget.z + z
        );
      } else if (gestureMode === 'BALL') {
        // ---- 仙剑球（v8，握拳）：实心剑丸——斐波那契体积均匀分布（r∝∛u），
        // 绕手自旋 + 呼吸，剑刃顺轨道切向 → 旋涡般的剑丸 ----
        const R = 9.5;
        const tr = (i + 0.5) / CONFIG.swordCount;
        const phi = Math.acos(1 - 2 * tr);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i + time * 1.1;
        const r = R * Math.cbrt(tr) * (1 + Math.sin(time * 2 + i * 0.4) * 0.04);
        target.set(
          currentTarget.x + r * Math.sin(phi) * Math.cos(theta),
          currentTarget.y + r * Math.cos(phi) * 0.92,
          currentTarget.z + r * Math.sin(phi) * Math.sin(theta)
        );
        // 轨道切向（绕 y 轴旋向）：剑刃指向运动方向，读出"旋转的剑球"
        _look.set(
          target.x - Math.sin(theta) * 3,
          target.y + 0.4,
          target.z + Math.cos(theta) * 3
        );
      } else if (gestureMode === 'BAGUA') {
        // ---- 八卦阵（自研 v6d 卦符阵，v7 回归）：中心阴阳环 + 8 卦×3 直爻 ----
        const nRing = 183, perRow = 34;
        const rot = time * 0.15;
        const TRIG = [7, 6, 2, 4, 0, 1, 5, 3];
        const sq = 0.94;
        if (i < nRing) {
          const a = (i / nRing) * Math.PI * 2 + rot * 0.6;
          const r = 1.3;
          target.set(
            currentTarget.x + Math.cos(a) * r,
            currentTarget.y + Math.sin(a) * r * sq,
            currentTarget.z + 0.5
          );
          _look.set(
            target.x - Math.sin(a),
            target.y + Math.cos(a) * sq,
            target.z + 0.1
          );
        } else {
          const idx = i - nRing;
          const row = idx % 24;
          const k = Math.floor(idx / 24);
          const gi = Math.floor(row / 3);
          const yao = row % 3;
          const yang = (TRIG[gi] >> yao) & 1;
          const ga = gi * Math.PI / 4 + rot;
          const Rg = 6.5;
          const gx = currentTarget.x + Math.cos(ga) * Rg;
          const gy = currentTarget.y + Math.sin(ga) * Rg * sq;
          let tx = -Math.sin(ga), ty = Math.cos(ga) * sq;
          const tl = Math.hypot(tx, ty) || 1; tx /= tl; ty /= tl;
          let ux = Math.cos(ga), uy = Math.sin(ga) * sq;
          const ul = Math.hypot(ux, uy) || 1; ux /= ul; uy /= ul;
          const tang = (k / (perRow - 1) - 0.5) * 1.5;
          let xoff = tang, yoff = (yao - 1) * 1.4;
          if (!yang) {
            const half = k < perRow / 2 ? -1 : 1;
            const kk = k % (perRow / 2);
            xoff = half * 1.0 + (kk / (perRow / 2 - 1) - 0.5) * 1.2;
          }
          const jit = Math.sin(i * 12.9898) * 0.025;
          target.set(
            gx + tx * (xoff + jit) + ux * yoff,
            gy + ty * (xoff + jit) + uy * yoff,
            currentTarget.z + 0.45 + yao * 0.02
          );
          _look.set(target.x + tx, target.y + ty, target.z + 0.12);
        }
      } else if (gestureMode === 'PILLAR') {
        // ---- 冲天剑柱：5 层圆柱面螺旋，能量波沿柱流动 ----
        const layers = 5;
        const n = Math.ceil(this.swordTotal / layers);
        const li = Math.floor(i / n);
        const k2 = i % n;
        const ang = (k2 / n) * Math.PI * 2 + time * 0.6;
        const hr = li / layers;
        const r = 3.5 + Math.sin(time * 3 + hr * Math.PI * 2) * 0.6;
        target.set(
          currentTarget.x + Math.cos(ang) * r,
          currentTarget.y + hr * 18 - 6,
          currentTarget.z + Math.sin(ang) * r
        );
        _look.set(target.x, target.y + 5, target.z);
      } else if (gestureMode === 'HEXAGRAM') {
        // ---- 六芒星：6 顶点星芒簇 ----
        const n = Math.ceil(this.swordTotal / 6);
        const vi = Math.floor(i / n) % 6;
        const k3 = i % n;
        const ang = time * 0.48 + vi * Math.PI / 3;
        const vx = currentTarget.x + Math.cos(ang) * 8.5;
        const vy = currentTarget.y + Math.sin(ang) * 8.5 * 0.8;
        const vz = currentTarget.z + Math.sin(ang) * 4;
        const sa = (k3 / n) * Math.PI * 2 + time * 1.8;
        const sp2 = (k3 / n) * Math.PI;
        const sr = 1.4;
        target.set(
          vx + Math.sin(sp2) * Math.cos(sa) * sr,
          vy + Math.cos(sp2) * sr,
          vz + Math.sin(sp2) * Math.sin(sa) * sr
        );
        _look.set(currentTarget.x, currentTarget.y, currentTarget.z);
      } else if (gestureMode === 'RAIN') {
        // ---- 全屏剑雨（自研重构）：999 剑全屏天幕暴雨直插地底，循环倾泻 ----
        target.set(
          pos.x + Math.sin(time * 3 + i) * 0.15,
          pos.y - 45,
          pos.z + Math.cos(time * 3 + i) * 0.15
        );
        // 落地循环回顶：坠入深渊立即从天穹（y = 26~38）全屏散开倾泻重现
        if (pos.y < -26) {
          pos.y = 26 + (i % 6) * 2.2 + Math.random() * 2.0;
          const spreadX = (Math.random() - 0.5) * 76;
          pos.x = currentTarget.x * 0.3 + spreadX * 0.7;
          pos.z = (Math.random() - 0.5) * 28;
          vel.set((Math.random() - 0.5) * 1.5, -(50 + Math.random() * 25), (Math.random() - 0.5) * 1.5);
        }
        _look.set(pos.x, pos.y - 15, pos.z);
      } else if (gestureMode === 'INFINITY') {
        // ---- 8 字环：Lissajous 轨道 ----
        const ph = (i / this.swordTotal) * Math.PI * 2 + time * 0.6;
        target.set(
          currentTarget.x + 11 * Math.sin(ph),
          currentTarget.y + 5 * Math.sin(ph * 2),
          currentTarget.z + 3 * Math.cos(ph)
        );
        const p2 = ph + 0.08;
        _look.set(
          currentTarget.x + 11 * Math.sin(p2),
          currentTarget.y + 5 * Math.sin(p2 * 2),
          currentTarget.z + 3 * Math.cos(p2)
        );
      } else if (gestureMode === 'ENERGY_BALL') {
        // ---- 聚能球：双手间斐波那契球面，半径随双手间距 ----
        const R = Math.max(3, Math.min(this.handsDist * 26 + 2, 11));
        const theta = Math.PI * (1 + Math.sqrt(5)) * i + time * 0.9;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / this.swordTotal);
        target.set(
          this.handsCX + R * Math.sin(phi) * Math.cos(theta),
          this.handsCY + 1.4 + R * Math.cos(phi),
          currentTarget.z + R * Math.sin(phi) * Math.sin(theta) * 0.5
        );
        _look.set(this.handsCX, this.handsCY + 1.4, currentTarget.z);
      } else if (gestureMode === 'EXPLODE') {
        // ---- 爆裂波：setMode 已播种径向初速，目标=手位（steering 拉回）----
        target.copy(currentTarget);
        _look.set(
          pos.x + this.velocities[i].x,
          pos.y + this.velocities[i].y,
          pos.z + this.velocities[i].z
        );
      } else if (gestureMode === 'LETTERS' || gestureMode === 'THUMBSUP' ||
                 gestureMode === 'QIANTANG' || gestureMode === 'WOAI') {
        // ---- 形状阵（v8 通用化）：Molispark 字阵 / 点赞造型 / 钱塘二字 / 我❤️钱塘——
        // 先旋天环，再螺旋收成形状（固定原点，不跟手）----
        const age = this._shapeAge;
        const L = this._activeShape;
        const CX = this._origin.x, CY = this._origin.y, CZ = this._origin.z;
        const lx = L ? L.px[i] : 0, ly = L ? L.py[i] : 0, lz = L ? L.pz[i] : 0;
        // 0-1.2s 天环；1.2-3.2s smoothstep 收形；之后贴形呼吸
        let k = 0;
        if (age >= 3.2) k = 1;
        else if (age > 1.2) { const u = (age - 1.2) / 2; k = u * u * (3 - 2 * u); }
        const rot = age * 2.4;
        const ringPhi = i / this.swordTotal * Math.PI * 2 + rot;
        const ringR = 34 + (i % 7) * 1.2;
        const ringX = CX + Math.cos(ringPhi) * ringR;
        const ringY = CY + Math.sin(ringPhi) * ringR;
        const ringZ = CZ + Math.sin(ringPhi * 1.3) * 5;
        // 逐剑呼吸幅度：点阵阵型（WOAI 点距 ~0.72）±4% 会把点云撕散，必须刚性贴形
        const breatheAmp = gestureMode === 'WOAI' ? 0 : 0.04;
        const breathe = age >= 3.2 ? 1 + Math.sin(time * 2 + i * 0.05) * breatheAmp : 1;
        target.set(
          ringX + (lx * breathe - ringX) * k,
          ringY + (ly * breathe - ringY) * k,
          ringZ + (lz - ringZ) * k        // 浅拱顶，形状中部微凸
        );
        if (k > 0.5) {
          // 剑刃朝上带固定小倾角：形状像一片竖立的剑林，而不是躺平的光点
          const ta = L ? L.rot[i] : 0;
          _look.set(target.x + Math.sin(ta) * 0.7, target.y + 3, target.z + Math.cos(ta) * 0.5);
        } else {
          _look.set(
            pos.x + this.velocities[i].x,
            pos.y + this.velocities[i].y,
            pos.z + this.velocities[i].z
          );
        }
      } else if (gestureMode === 'DAGENG' && this.isTracking) {
        // ---- 大庚剑阵：0号主剑巨大化6x跟手，其余10层同心圆柱倒悬 ----
        // v10e 全屏覆盖：环阵不再跟手（固定居中）、竖向带宽 46 铺满全屏——
        // 旧版带宽 20 且整体压在手下方（hCenter=手位-10），上半屏大片留空。
        if (i === 0) {
          const centralHeight = currentTarget.y + 5;
          target.set(currentTarget.x, centralHeight, currentTarget.z);
        } else {
          const effectiveI = i - 1;
          const effectiveCount = CONFIG.swordCount - 1;

          const layerCount = 10;
          const perLayer = Math.max(1, Math.floor(effectiveCount / layerCount));
          const layerIdx = Math.floor(effectiveI / perLayer);
          const idxInLayer = effectiveI % perLayer;

          const radius = CONFIG.dagengRadius + layerIdx * 1.5 + 2;
          const dir = layerIdx % 2 === 0 ? 1 : -1;
          const theta =
            (idxInLayer / perLayer) * Math.PI * 2 +
            time * CONFIG.dagengRotateSpeed * dir;

          const hCenter = 0;
          const hRange = CONFIG.dagengHeight;
          const hRand = Math.sin(effectiveI * 13.1) * 0.5 + 0.5;
          const height = hCenter + (hRand - 0.5) * hRange;

          target.set(
            Math.cos(theta) * radius,
            height,
            Math.sin(theta) * radius
          );
        }
      } else {
        // ---- 游龙模式：指尖龙头锋芒先导(25把) + 龙身沿 600 点历史轨迹均匀拉开 ----
        const nHead = 25;
        if (i < nHead) {
          // 龙头锋芒：在指尖前方形成锥形突刺先导阵列，剑尖精准对准剑指所指的世界方向
          const pRatio = i / nHead;
          const forwardDist = pRatio * 4.2 + 0.5;
          const radialR = Math.sqrt(pRatio) * 1.6;
          const angle = i * 2.39996 + time * 6.0;
          const px = this.pointDir.x || 1, py = this.pointDir.y || 0;
          const perpX = -py, perpY = px;
          target.set(
            currentTarget.x + px * forwardDist + perpX * Math.cos(angle) * radialR,
            currentTarget.y + py * forwardDist + perpY * Math.cos(angle) * radialR,
            currentTarget.z + Math.sin(angle) * radialR * 0.7
          );
          _look.set(target.x + px * 5.0, target.y + py * 5.0, target.z);
        } else {
          // 龙身与龙尾：自适应在整条 600 点历史路径上平滑均匀延展，彻底消除堆积
          const bodyI = i - nHead;
          const bodyCount = this.swordTotal - nHead;
          const pathRatio = bodyI / (bodyCount - 1);
          const pathIdx = pathRatio * (this.pathHistory.length - 1);
          const idxA = Math.floor(pathIdx);
          const idxB = Math.min(idxA + 1, this.pathHistory.length - 1);
          const alpha = pathIdx - idxA;

          if (this.pathHistory[idxA] && this.pathHistory[idxB]) {
            target.lerpVectors(this.pathHistory[idxA], this.pathHistory[idxB], alpha);
          } else if (this.pathHistory[idxA]) {
            target.copy(this.pathHistory[idxA]);
          } else {
            target.copy(currentTarget);
          }

          // 龙身双螺旋立体翻腾
          const spiralAngle = bodyI * 0.14 + time * 4.5;
          const spiralR = 1.0 + Math.sin(bodyI * 0.04 + time * 2.0) * 0.5;
          target.x += Math.cos(spiralAngle) * spiralR * 0.6;
          target.y += Math.sin(spiralAngle) * spiralR * 0.6;
          target.z += Math.sin(time * 3 + bodyI * 0.08) * 0.4;

          const ns = CONFIG.noiseScale;
          const na =
            CONFIG.noiseStrength * (0.6 + Math.sin(time * 2 + bodyI * 0.02) * 0.3);
          target.x += simplex.noise3D(pos.x * ns, pos.y * ns, time) * na;
          target.y += simplex.noise3D(pos.y * ns, pos.z * ns, time + 100) * na;
          target.z += simplex.noise3D(pos.z * ns, pos.x * ns, time + 200) * na;
        }
      }

      // ============ 大庚原版 Boids 到达减速动力学 ============
      // 自研密集图形阵（八卦/剑柱/六芒/剑雨/8字/爆裂/聚能球）用"低速 18 + 高转向力 4x +
      // 近距 6 减速"：原版冲刺 50 + 转向上限 28/s 会对静态目标产生 ±10 级永久过冲振荡，
      // 图形散架成横带（v7 实测）。
      const ours =
        gestureMode === 'BAGUA' || gestureMode === 'PILLAR' ||
        gestureMode === 'HEXAGRAM' || gestureMode === 'BALL' ||
        gestureMode === 'INFINITY' || gestureMode === 'ENERGY_BALL' ||
        gestureMode === 'EXPLODE' || gestureMode === 'LETTERS' ||
        gestureMode === 'THUMBSUP' || gestureMode === 'QIANTANG' ||
        gestureMode === 'WOAI';
      const arriveR = ours ? 6 : 10;
      let speed = ours
        ? 18
        : (gestureMode === 'SHIELD' ? CONFIG.sprintSpeed : CONFIG.maxSpeed);
      let steerFactor = ours
        ? 4
        : (gestureMode === 'SHIELD' || gestureMode === 'LOTUS' ? 3 : 1);

      if (gestureMode === 'RAIN') {
        speed = 58; // 剑雨疾坠高速破空
      } else if (gestureMode === 'DRAGON') {
        // 剑指跟随极致调优：龙头 25 把先导剑享受 5.2x 超大转向力和 50 疾速，零延迟吸附指尖
        steerFactor = i < 25 ? 5.2 : 2.8;
        speed = i < 25 ? CONFIG.sprintSpeed : CONFIG.maxSpeed * 1.3;
      }

      const distT = target.distanceTo(pos);
      if (gestureMode !== 'RAIN') {
        if (gestureMode === 'DRAGON' && i < 25) {
          // 龙头紧咬指尖，到达半径收窄为 2.5，杜绝超调
          if (distT > 1.5) speed = CONFIG.sprintSpeed;
          else speed = distT * CONFIG.sprintSpeed * 0.6;
        } else if (distT > 4) {
          speed = ours ? 18 : CONFIG.sprintSpeed;
        } else if (distT < 1) {
          speed = distT * CONFIG.maxSpeed;
        }
      }

      const desired = _des.copy(target).sub(pos);
      const d = desired.length();

      if (d > 0) {
        desired.normalize();
        if (d < arriveR) {
          desired.multiplyScalar(speed * (d / arriveR));
        } else {
          desired.multiplyScalar(speed);
        }
      }

      const steer = _steer.copy(desired).sub(vel);
      steer.clampLength(0, CONFIG.steerForce * delta * steerFactor);

      // 转向力必须真正并入速度——v7.1 去分配重构时误删本行，
      // 导致一切 target 驱动阵型失去收敛加速度、剑群停死在初始盒子里（开机方形剑阵）
      vel.add(steer);

      // 分离力：只用于大庚四绝阵的疏阵列（DRAGON 龙身/DAGENG 柱阵/未跟手的莲花散布）。
      // 八卦爻线、剑柱、8 字环等自研阵型是密集实线排布（剑距 <0.1），分离力会把图形推散。
      const sepOn =
        gestureMode === 'DRAGON' || gestureMode === 'DAGENG' ||
        (gestureMode === 'LOTUS' && !this.isTracking);
      if (i > 0 && sepOn) {
        const prev = this.positions[i - 1];
        const diff = _sep.copy(pos).sub(prev);
        const dDiff = diff.length();
        if (dDiff < CONFIG.separationDist && dDiff > 0.01) {
          diff.normalize().multiplyScalar(CONFIG.separationForce * delta);
          vel.add(diff);
        }
      }

      pos.addScaledVector(vel, delta);

      dummy.position.copy(pos);

      // 朝向计算（全部走模块级 _look/_des/_sep，禁止逐剑 clone）
      let lookTarget = _look;
      if (
        gestureMode === 'BAGUA' || gestureMode === 'PILLAR' ||
        gestureMode === 'HEXAGRAM' || gestureMode === 'RAIN' ||
        gestureMode === 'INFINITY' || gestureMode === 'ENERGY_BALL' ||
        gestureMode === 'EXPLODE' || gestureMode === 'BALL' ||
        gestureMode === 'LETTERS' || gestureMode === 'THUMBSUP' ||
        gestureMode === 'QIANTANG' || gestureMode === 'WOAI' ||
        (gestureMode === 'DRAGON' && i < 25)
      ) {
        // 阵型在目标计算分支里已写入 _look
      } else if (gestureMode === 'SHIELD') {
        if (vel.length() > 0.1) {
          _look.copy(pos).add(_des.copy(vel).normalize());
        } else {
          _des.copy(pos).sub(currentTarget);
          _look.set(-_des.z, 0, _des.x);
          if (_look.lengthSq() > 1e-8) _look.normalize();
          else _look.set(0, 0, 1);
          _look.add(pos);
        }
      } else if (gestureMode === 'LOTUS') {
        // 剑尖朝向：静止向外辐射，手移动时顺划动风向偏转
        _des.copy(pos).sub(currentTarget);
        if (_des.lengthSq() < 1e-8) _des.set(1, 0, 0);
        else _des.normalize();
        const vx = this.handVel.vx || 0, vy = this.handVel.vy || 0;
        const vLen = Math.hypot(vx, vy);
        if (vLen > 0.06) {
          _sep.set(vx / vLen, vy / vLen, 0);
          _des.lerp(_sep, Math.min(vLen * 2.2, 0.85)).normalize();
        }
        _look.copy(pos).add(_des);
      } else if (gestureMode === 'DAGENG' && this.isTracking) {
        _look.set(pos.x, pos.y - 1, pos.z);
      } else if (vel.length() > 0.1) {
        _look.copy(pos).add(vel);
      } else {
        _look.set(pos.x, pos.y, pos.z - 1);
      }
      dummy.lookAt(lookTarget);

      let targetScale = 1;
      if (gestureMode === 'DAGENG' && this.isTracking) {
        targetScale = i === 0 ? 6 : 1.5;
      } else if (gestureMode === 'BAGUA') {
        targetScale = i < 183 ? 0.45 : 0.5;
      } else if (gestureMode === 'LETTERS') {
        targetScale = 0.24;   // 小剑字才锐利（0.32 时 bloom 互相叠成毛边）
      } else if (gestureMode === 'THUMBSUP') {
        targetScale = 0.28;   // 造型剪影用小剑，轮廓清晰
      } else if (gestureMode === 'QIANTANG') {
        targetScale = 0.3;   // 轮廓线阵：剑身重叠成连续灯管，笔画才实
      } else if (gestureMode === 'WOAI') {
        targetScale = 0.68;   // 横幅点阵：剑长 ~1.7 追平平均点距，重叠成粗实笔画
      }

      const lerpSpeed = i === 0 && gestureMode === 'DAGENG' ? 0.6 : 2.0;
      this.scl[i] += (targetScale - this.scl[i]) * Math.min(1, lerpSpeed * dt);
      const newScale = this.scl[i];

      dummy.scale.set(newScale, newScale, newScale);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);

      // 辟邪神雷光环（护盾模式与主剑常驻，其余高频闪烁）
      const isActive =
        gestureMode === 'SHIELD'
          ? Math.sin(time * 30 + i * 0.5) > 0.0
          : Math.sin(time * 20 + i * 0.7) > 0.3;

      const auraScale = newScale * (isActive ? 1.3 : 1.0);

      if (!isActive && !(i === 0 && gestureMode === 'DAGENG')) {
        dummy.scale.set(0, 0, 0);
      } else {
        dummy.scale.set(auraScale, auraScale, auraScale);
      }

      dummy.updateMatrix();
      this.aura.setMatrixAt(i, dummy.matrix);
      dummy.scale.set(newScale, newScale, newScale);
    }

    this.mesh.instanceMatrix.needsUpdate = true;
    this.aura.instanceMatrix.needsUpdate = true;

    // 3. 特效子系统随动
    this.magicCircle.setMode(gestureMode === 'DAGENG' && this.isTracking);
    this.magicCircle.update(dt, t, currentTarget);

    this.divineLightning.setMode(gestureMode === 'DAGENG' && this.isTracking);
    this.divineLightning.update(dt, t, this.positions, this.swordTotal);

    // 4. 拖尾跟随
    for (const tr of this.trails) {
      const i = tr.user.idx;
      if (i < 0 || this.burstMode[i] === 0) {
        if (tr.active) {
          tr.age = (tr.age || 0) + dt;
          const a = Math.max(0, 0.6 * (1 - (tr.age - 0) / 0.5));
          tr.material.uniforms.headColor.value.w = a;
          if (tr.age > 0.6) { tr.deactivate(); tr.user.idx = -1; tr.reset(); }
        }
        continue;
      }
      if (!tr.active) { tr.activate(); tr.age = 0; }
      const vel = this.velocities[i];
      if (vel.length() > 0.5) {
        const p = this.positions[i];
        _des.copy(vel).normalize();
        _look.copy(p).addScaledVector(_des, 1.5);
        _sep.set(-_des.y, _des.x, 0);
        if (_sep.lengthSq() > 1e-8) _sep.normalize().multiplyScalar(0.8);
        else _sep.set(0.8, 0, 0);
        tr.advanceWorld(_look, _sep);
      }
    }
  }

  get activeCount() { return this.swordTotal; }
}
