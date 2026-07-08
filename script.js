const canvas = document.querySelector("#neon-field");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const compactViewport = window.matchMedia("(max-width: 900px)");
let particles = [];
let pointer = { x: 0.5, y: 0.5 };
let scrollTimer;
let isScrolling = false;
let animationFrame = 0;
let lastDraw = 0;

function resizeCanvas() {
  const dpr = 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const density = window.innerWidth < 700 ? 26000 : 23000;
  const count = Math.min(48, Math.floor((window.innerWidth * window.innerHeight) / density));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.24,
    vy: (Math.random() - 0.5) * 0.24,
    r: Math.random() * 1.4 + 0.55,
    hue: Math.random() > 0.52 ? 268 : 348
  }));
}

function drawField(timestamp = 0) {
  if (timestamp - lastDraw < 33) {
    requestAnimationFrame(drawField);
    return;
  }

  lastDraw = timestamp;
  animationFrame += 1;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const p of particles) {
    if (!reduceMotion) {
      p.x += p.vx + (pointer.x - 0.5) * 0.12;
      p.y += p.vy + (pointer.y - 0.5) * 0.12;
    }

    if (p.x < -20) p.x = window.innerWidth + 20;
    if (p.x > window.innerWidth + 20) p.x = -20;
    if (p.y < -20) p.y = window.innerHeight + 20;
    if (p.y > window.innerHeight + 20) p.y = -20;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.62)`;
    ctx.shadowColor = `hsla(${p.hue}, 100%, 65%, 0.9)`;
    ctx.shadowBlur = 9;
    ctx.fill();
  }

  if (isScrolling || window.innerWidth < 700 || animationFrame % 2 === 1) {
    requestAnimationFrame(drawField);
    return;
  }

  ctx.shadowBlur = 0;
  ctx.lineWidth = 0.55;
  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 122) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(200, 145, 220, ${0.14 - distance / 1100})`;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawField);
}

const revealObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("pointermove", event => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * -7}deg) rotateY(${x * 9}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

window.addEventListener("pointermove", event => {
  pointer = {
    x: event.clientX / window.innerWidth,
    y: event.clientY / window.innerHeight
  };
});

window.addEventListener(
  "scroll",
  () => {
    isScrolling = true;
    document.body.classList.add("is-scrolling");
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      isScrolling = false;
      document.body.classList.remove("is-scrolling");
    }, 400);
  },
  { passive: true }
);

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawField();
