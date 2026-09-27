// 隔空御剑 · 自动演示页（v10g）：无摄像头、无手势识别。
// 开场（电影穿越式标题）：镜头自 999 剑排成的光隧道中加速飞出 →
// 白光一闪 →「隔空御剑·万剑归宗」光爆破现并轻微震动 → 光散后
// 无缝接入手势轮播：握拳 → 点赞 → 金属礼 → 敬礼 → 比心 各 10s，
// 一轮播完后永久停留在"我❤️钱塘"。左下角只展示手势动作名称。
// URL：?t=秒数 —— 跳过标题，直接从手势时间线第 t 秒预滚启动（调试/跳播）。
// 点击页面任意处：从头重播（含标题穿越）。
import * as THREE from 'three';
import { FX } from './fx.config.js';
import { Director } from './fx/director.js';
import { PostFX } from './fx/postfx.js';

const qs = new URLSearchParams(location.search);
const tOffset = parseFloat(qs.get('t') || '0') || 0;
const FLASH_T = 2.2;        // 标题穿越阶段时长（秒，墙钟）——白闪交还给实况

const SEQ = [
  { key: 'FIST',         label: '握拳' },
  { key: 'THUMB_UP',     label: '点赞' },
  { key: 'ROCK',         label: '金属礼' },
  { key: 'SALUTE',       label: '敬礼' },
  { key: 'FINGER_HEART', label: '比心' },
];
const STEP_SEC = 10;
const $ = (id) => document.getElementById(id);

// ---------------- 渲染器（与主程序同款像素预算） ----------------
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
const basePR = (() => {
  const dpr = Math.min(devicePixelRatio || 1, FX.maxDpr);
  const scale = Math.min(1, FX.maxDeviceLongEdge / (Math.max(innerWidth, innerHeight) * dpr));
  return Math.max(0.6, dpr * scale);
})();
renderer.setPixelRatio(basePR);
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x04060d);
$('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 400);
camera.position.set(0, 3, 40);

// ---------------- 左下角手势名（仅名称） ----------------
const labelBox = $('demo-labels');
for (const s of SEQ) {
  const row = document.createElement('div');
  row.className = 'g';
  row.textContent = s.label;
  labelBox.appendChild(row);
}
const rows = [...labelBox.querySelectorAll('.g')];

// ---------------- 自适应画质（主程序同款：降分辨率→关 bloom→光晕壳补偿） ----------------
class AdaptiveQuality {
  constructor(renderer, postfx, director) {
    this.renderer = renderer; this.postfx = postfx; this.director = director;
    this.q = FX.quality;
    this.scale = this.q.resScaleMax;
    this.bloomOff = false;
    this._frames = 0; this._t = performance.now();
    this._downSince = null; this._upSince = null;
    this._apply();
  }
  _apply() {
    this.renderer.setPixelRatio(basePR * this.scale);
    this.postfx.setSize(innerWidth, innerHeight);
    this.postfx.setBloomEnabled(!this.bloomOff);
    this.director.applyLowGlow(this.bloomOff);
  }
  _stepDown(now) {
    if (this.scale > this.q.resScaleMin + 1e-3) {
      this.scale = Math.max(this.q.resScaleMin, this.scale - this.q.resStep);
    } else if (!this.bloomOff) {
      this.bloomOff = true;
    } else return;
    this._apply();
    this._downSince = now;
  }
  _stepUp(now) {
    if (this.bloomOff) {
      this.bloomOff = false;
    } else if (this.scale < this.q.resScaleMax - 1e-3) {
      this.scale = Math.min(this.q.resScaleMax, this.scale + this.q.resStep);
    } else return;
    this._apply();
    this._upSince = now;
  }
  tick(now) {
    this._frames++;
    const el = now - this._t;
    if (el < this.q.sampleMs) return;
    const fps = this._frames * 1000 / el;
    this._frames = 0; this._t = now;
    if (fps < this.q.downFps) {
      this._upSince = null;
      if (this._downSince === null) this._downSince = now;
      else if (now - this._downSince >= this.q.holdDownMs) this._stepDown(now);
    } else if (fps > this.q.upFps) {
      this._downSince = null;
      if (this._upSince === null) this._upSince = now;
      else if (now - this._upSince >= this.q.holdUpMs) this._stepUp(now);
    } else {
      this._downSince = this._upSince = null;
    }
  }
}

let director, postfx, quality, ready = false;
let phase = 'title';        // 'title'（穿越+标题） | 'live'（手势轮播）
let titleT = 0;             // 标题阶段计时（墙钟秒）
let flashed = false;
let virtualT = 0;           // 手势时间线（秒）——片头卡淡出后才起表
let worldT = 0;             // 世界动画时钟（永远前进，驱动阵型旋转/物理）
let cardUntil = 0;          // 片头卡淡出完成的墙钟时刻（performance.now 基准）
let curIdx = -1;
const CARD_MS = 3900;       // 标题卡 CSS 动画总时长（入场+停留+淡出）

// ---------------- 穿越隧道：999 剑沿镜头路径排成光隧道 ----------------
function initTunnel() {
  const v = director.volley;
  for (let i = 0; i < v.swordTotal; i++) {
    const u = i / v.swordTotal;
    const z = -62 + u * 128 + (Math.random() - 0.5) * 4;
    const ang = i * 2.39996;
    const r = 4.5 + (i % 6) * 2.6 + Math.random() * 2.5;
    v.positions[i].set(Math.cos(ang) * r, 3 + Math.sin(ang) * r * 0.72, z);
    v.velocities[i].set(0, 0, 0);
  }
  writeTunnelMatrices(0);
}
function writeTunnelMatrices(t) {
  const v = director.volley;
  const dummy = v.dummy;
  for (let i = 0; i < v.swordTotal; i++) {
    const p = v.positions[i];
    const swirl = t * 0.5 + i * 0.35;
    dummy.position.set(
      p.x + Math.sin(swirl) * 0.4,
      p.y + Math.cos(swirl * 0.8) * 0.3,
      p.z);
    dummy.lookAt(dummy.position.x, dummy.position.y, dummy.position.z + (i % 2 ? 3 : -3));
    dummy.scale.set(1.25, 1.25, 1.25);
    dummy.updateMatrix();
    v.mesh.setMatrixAt(i, dummy.matrix);
    v.aura.setMatrixAt(i, dummy.matrix);
  }
  v.mesh.instanceMatrix.needsUpdate = true;
  v.aura.instanceMatrix.needsUpdate = true;
}
// 镜头沿隧道加速飞行（ease-in：越飞越快，甩进白闪）
function cameraFly(t) {
  const u = Math.min(t / FLASH_T, 1);
  const z = -54 + 104 * u * u;
  camera.position.set(Math.sin(t * 2.4) * 1.6, 3 + Math.cos(t * 1.7) * 1.1, z);
  camera.lookAt(camera.position.x * 0.4, camera.position.y * 0.4, z + 24);
  const fov = 62 + 22 * u;
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
}
// 白闪交接：硬切藏进闪光里，标题光爆破现，世界交给实况（剑群聚向握拳剑球）
function enterLive() {
  const f = $('flash');
  f.classList.add('on');
  setTimeout(() => f.classList.remove('on'), 60);
  $('title-card').classList.add('show');
  director.forceGesture = SEQ[0].key;
  virtualT = 0;                       // 片头卡淡出后才允许累加（见主循环）
  cardUntil = performance.now() + CARD_MS;
  curIdx = -1;
  phase = 'live';
}
// 从头重播（含标题穿越）
function restart() {
  phase = 'title';
  titleT = 0;
  flashed = false;
  virtualT = 0;
  worldT = 0;
  cardUntil = 0;
  curIdx = -1;
  director.forceGesture = null;
  if (director.volley._tinted) director.volley._tintSwords(null);   // 还原红心剑
  initTunnel();
  const tc = $('title-card');
  tc.classList.remove('show');
  void tc.offsetWidth;                    // 强制重排，重置 CSS 动画
  const f = $('flash');
  f.classList.remove('on');
  for (const r of rows) r.classList.remove('on');
  for (const s of segFills) s.style.width = '0%';
}

// ---------------- 手势时间线（flash 时刻起算） ----------------
const segFills = [...document.querySelectorAll('#demo-progress .seg i')];
function updateProgress() {
  const segIdx = Math.min(Math.floor(virtualT / STEP_SEC), SEQ.length - 1);
  for (let i = 0; i < segFills.length; i++) {
    let p = 0;
    if (i < segIdx) p = 1;
    else if (i === segIdx) p = Math.min(1, (virtualT - segIdx * STEP_SEC) / STEP_SEC);
    segFills[i].style.width = (p * 100).toFixed(1) + '%';
  }
}
function stepLive(dt, tWorld) {
  // 手势时间线只在片头卡淡出后前进；世界动画时钟（tWorld）永远前进，
  // 标题卡停留期间剑球照常聚拢旋转，只是不计时。
  const idx = Math.min(Math.floor(virtualT / STEP_SEC), SEQ.length - 1);
  if (idx !== curIdx) {
    curIdx = idx;
    director.forceGesture = SEQ[idx].key;   // 强制通道：present=true + 每帧 setMode
    for (let i = 0; i < rows.length; i++) rows[i].classList.toggle('on', i === idx);
  }
  updateProgress();
  director.update(dt, tWorld);
}

// ---------------- 启动 ----------------
async function boot() {
  try {
    if (document.fonts) await document.fonts.ready.catch(() => {});
    director = new Director(scene, camera);
    postfx = new PostFX(renderer, scene, camera);
    postfx.add(...director.bloomTargets());
    quality = new AdaptiveQuality(renderer, postfx, director);
    initTunnel();
    if (tOffset > 0) {
      // 跳过标题：直接从手势时间线第 tOffset 秒预滚（阵型从隧道位收敛）
      phase = 'live';
      flashed = true;
      virtualT = 0;
      curIdx = Math.min(Math.floor(tOffset / STEP_SEC), SEQ.length - 1);
      director.forceGesture = SEQ[curIdx].key;
      for (let i = 0; i < Math.round(tOffset * 60); i++) {
        virtualT += 1 / 60;
        worldT += 1 / 60;
        stepLive(1 / 60, worldT);
      }
      $('title-card').style.display = 'none';
      $('flash').style.display = 'none';
    }
    ready = true;
    $('loading').classList.remove('on');
  } catch (e) {
    console.error(e);
    $('loading').classList.remove('on');
    $('loading').innerHTML = '<div class="big">LOAD FAILED</div>';
  }
}
boot();

// ---------------- 主循环 ----------------
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (!ready) return;
  if (phase === 'title') {
    titleT += dt;
    director.env.update(dt, titleT);      // 星空/灵气照常运行
    writeTunnelMatrices(titleT);          // 隧道剑阵（自绘矩阵，不经物理）
    cameraFly(titleT);                    // 镜头加速穿梭
    if (titleT >= FLASH_T && !flashed) { flashed = true; enterLive(); }
  } else {
    worldT += dt;
    if (performance.now() >= cardUntil) virtualT += dt;   // 片头卡淡出后才开始第一段计时
    stepLive(dt, worldT);
    quality.tick(performance.now());
  }
  postfx.render();
}
animate();

// ---------------- resize / 全屏 / 指针静止隐藏 / 点击重播 ----------------
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  postfx?.setSize(innerWidth, innerHeight);
});
addEventListener('keydown', (e) => {
  if (e.key === 'f' || e.key === 'F') {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
});
let pointerTimer;
addEventListener('pointermove', () => {
  document.body.classList.remove('cursor-off');
  clearTimeout(pointerTimer);
  pointerTimer = setTimeout(() => document.body.classList.add('cursor-off'), 2000);
});
addEventListener('pointerdown', () => { if (ready) restart(); });
