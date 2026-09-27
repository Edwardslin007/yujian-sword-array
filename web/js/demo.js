// 隔空御剑 · 自动演示页（v10）：无摄像头、无手势识别。
// 复用主程序的特效引擎（Director/PostFX/自适应画质），按时间表依次强制
// 阵型：握拳 → 点赞 → 金属礼 → 敬礼 → 比心，每个 10 秒；一轮播完后
// 永久停留在"我❤️钱塘"（比心）。
// 左下角只展示手势动作名称（当前项高亮）。
// URL：?t=秒数 —— 从时间线第 t 秒直接预滚启动（确定性，调试/跳播用）。
import * as THREE from 'three';
import { FX } from './fx.config.js';
import { Director } from './fx/director.js';
import { PostFX } from './fx/postfx.js';

const qs = new URLSearchParams(location.search);
const tOffset = parseFloat(qs.get('t') || '0') || 0;

// 演示时间表（末项停留）
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

// ---------------- 时间线：idx = min(⌊t/10⌋, 末项)；切换即强制阵型 ----------------
let virtualT = 0;
let curIdx = -1;
const segFills = [...document.querySelectorAll('#demo-progress .seg i')];
function updateProgress() {
  // 分段进度：走完的段满格，当前段按段内时间填充，末段随停留保持满格
  const segIdx = Math.min(Math.floor(virtualT / STEP_SEC), SEQ.length - 1);
  for (let i = 0; i < segFills.length; i++) {
    let p = 0;
    if (i < segIdx) p = 1;
    else if (i === segIdx) p = Math.min(1, (virtualT - segIdx * STEP_SEC) / STEP_SEC);
    segFills[i].style.width = (p * 100).toFixed(1) + '%';
  }
}
function step(dt) {
  virtualT += dt;
  const idx = Math.min(Math.floor(virtualT / STEP_SEC), SEQ.length - 1);
  if (idx !== curIdx) {
    curIdx = idx;
    director.forceGesture = SEQ[idx].key;   // 强制通道：present=true + 每帧 setMode
    for (let i = 0; i < rows.length; i++) rows[i].classList.toggle('on', i === idx);
  }
  updateProgress();
  director.update(dt, virtualT);
}

async function boot() {
  try {
    if (document.fonts) await document.fonts.ready.catch(() => {});
    director = new Director(scene, camera);
    postfx = new PostFX(renderer, scene, camera);
    postfx.add(...director.bloomTargets());
    quality = new AdaptiveQuality(renderer, postfx, director);
    // 预滚：?t=秒 直接把世界推到该时刻（阵型已收敛），随后继续实况
    if (tOffset > 0) {
      const n = Math.round(tOffset * 60);
      for (let i = 0; i < n; i++) step(1 / 60);
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
  if (ready && director) {
    step(dt);
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
// 点击任意处：从头重播一轮
addEventListener('pointerdown', () => {
  if (!ready) return;
  virtualT = 0;
  curIdx = -1;
});
