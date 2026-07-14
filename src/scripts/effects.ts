// ══════════════════════════════════════════════════════════════════════
//  Efeitos KatanaMode: sakura com física · cursor sumê · scroll reveal
//  Vanilla + Motion One (para o reveal com easing rico).
// ══════════════════════════════════════════════════════════════════════
import { animate, stagger } from 'motion';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// ─────────────────────────────────────────────────────────────────────
// 1) SCROLL REVEAL — IntersectionObserver + Motion
// ─────────────────────────────────────────────────────────────────────
function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (reduced) { els.forEach((e) => e.classList.add('in')); return; }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        io.unobserve(el);

        // se tiver filhos marcados, faz stagger; senão anima o próprio
        const kids = el.querySelectorAll<HTMLElement>('[data-stagger]');
        if (kids.length) {
          animate(
            kids,
            { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
            { duration: 0.6, delay: stagger(0.08), easing: [0.22, 0.61, 0.36, 1] },
          );
          el.classList.add('in');
        } else {
          el.classList.add('in');
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((e) => io.observe(e));
}

// ─────────────────────────────────────────────────────────────────────
// 2) CURSOR SUMÊ — lerp suave + hover em links
// ─────────────────────────────────────────────────────────────────────
function initCursor() {
  if (!fine || reduced) return;
  const ring = document.querySelector<HTMLElement>('.cursor');
  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  if (!ring || !dot) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

  const tick = () => {
    // dot acompanha instantâneo, ring com atraso (lerp)
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const hoverSel = 'a, button, .skill, .proj, .contact a';
  document.querySelectorAll(hoverSel).forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
}

// ─────────────────────────────────────────────────────────────────────
// 3) SAKURA — pétalas com física (vento, gravidade, rotação, profundidade)
// ─────────────────────────────────────────────────────────────────────
function initSakura() {
  const canvas = document.getElementById('sakura-canvas') as HTMLCanvasElement | null;
  if (!canvas || reduced) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  const resize = () => {
    W = canvas.width = Math.floor(window.innerWidth * dpr);
    H = canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const ACCENT = '#7E1C1C';
  const COUNT = Math.max(14, Math.min(30, Math.floor(window.innerWidth / 60)));

  interface Petal {
    x: number; y: number; z: number;      // z = profundidade (0.4–1)
    r: number;                              // raio
    vy: number; vx: number;                 // velocidades base
    rot: number; vr: number;                // rotação
    sway: number; swaySpeed: number;        // oscilação
    alpha: number;
  }
  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const petals: Petal[] = [];
  const spawn = (initial = false): Petal => {
    const z = rand(0.4, 1);
    return {
      x: rand(0, W),
      y: initial ? rand(0, H) : rand(-40 * dpr, -10 * dpr),
      z,
      r: rand(5, 10) * dpr * z,
      vy: rand(0.35, 0.9) * dpr * z,
      vx: rand(-0.15, 0.15) * dpr,
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.02, 0.02),
      sway: rand(0, Math.PI * 2),
      swaySpeed: rand(0.008, 0.02),
      alpha: rand(0.25, 0.6) * z,
    };
  };
  for (let i = 0; i < COUNT; i++) petals.push(spawn(true));

  // vento global oscilando lentamente
  let windPhase = 0;

  const drawPetal = (p: Petal) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = ACCENT;
    // forma de pétala de sakura (dois arcos + entalhe)
    ctx.beginPath();
    ctx.moveTo(0, -p.r);
    ctx.bezierCurveTo(p.r * 0.7, -p.r * 0.7, p.r * 0.7, p.r * 0.55, 0, p.r);
    ctx.bezierCurveTo(-p.r * 0.7, p.r * 0.55, -p.r * 0.7, -p.r * 0.7, 0, -p.r);
    ctx.fill();
    // entalhe no topo
    ctx.globalAlpha = p.alpha * 0.5;
    ctx.fillStyle = '#F4F2EC';
    ctx.beginPath();
    ctx.ellipse(0, -p.r * 0.75, p.r * 0.12, p.r * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    windPhase += 0.005;
    const wind = Math.sin(windPhase) * 0.4 * dpr;

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.sway += p.swaySpeed;
      p.x += p.vx + Math.sin(p.sway) * 0.6 * dpr * p.z + wind * p.z;
      p.y += p.vy;
      p.rot += p.vr;

      if (p.y > H + 20 * dpr || p.x < -30 * dpr || p.x > W + 30 * dpr) {
        petals[i] = spawn(false);
        continue;
      }
      drawPetal(p);
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

// ─────────────────────────────────────────────────────────────────────
// boot
// ─────────────────────────────────────────────────────────────────────
const boot = () => { initReveal(); initCursor(); initSakura(); };
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
