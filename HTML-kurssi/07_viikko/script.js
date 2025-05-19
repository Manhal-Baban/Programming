const canvas = document.getElementById("signalCanvas");
const ctx = canvas.getContext("2d");
const voice = document.getElementById("voiceAudio");
let animationId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawSignalSymbol(x, y, radius) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "#00ffe5";
  ctx.lineWidth = 4;

  // Outer arc (like a crescent or badge)
  ctx.beginPath();
  ctx.arc(0, 0, radius, Math.PI * 0.2, Math.PI * 1.8);
  ctx.stroke();

  // Vertical line down the middle
  ctx.beginPath();
  ctx.moveTo(0, -radius);
  ctx.lineTo(0, radius);
  ctx.stroke();

  // Two diagonal lines like a rune or glyph
  ctx.beginPath();
  ctx.moveTo(-radius * 0.6, -radius * 0.6);
  ctx.lineTo(radius * 0.6, radius * 0.6);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(radius * 0.6, -radius * 0.6);
  ctx.lineTo(-radius * 0.6, radius * 0.6);
  ctx.stroke();

  ctx.restore();
}

function animateSignal() {
  resizeCanvas();
  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const x = canvas.width * 0.75;
    const y = canvas.height * 0.25;
    const radius = 60 + 10 * Math.sin(angle);
    drawSignalSymbol(x, y, radius);
    angle += 0.05;
    animationId = requestAnimationFrame(draw);
  }
  draw();
}

document.getElementById("triggerSignal").addEventListener("click", () => {
  if (animationId === null) {
    animateSignal();
    voice.play();
  } else {
    cancelAnimationFrame(animationId);
    animationId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

function typeEffect() {
  const title = document.querySelector(".typing-title");
  title.textContent = "The Source has risen...";
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
typeEffect();
