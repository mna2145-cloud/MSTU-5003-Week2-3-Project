const figure = document.querySelector("#figure");
const meter = document.querySelector(".meter");
const meterFill = document.querySelector("#meter-fill");
const chargeLabel = document.querySelector("#charge-label");
const status = document.querySelector("#status");

const maxChargeMs = 1200;
const minJumpHeight = 40;
const maxJumpHeight = 190;
let chargeStartedAt = null;
let animationFrame = null;

function updateJump() {
  if (chargeStartedAt === null) return;

  const heldMs = Math.min(performance.now() - chargeStartedAt, maxChargeMs);
  const charge = heldMs / maxChargeMs;
  const height = minJumpHeight + charge * (maxJumpHeight - minJumpHeight);
  const percent = Math.round(charge * 100);

  figure.style.setProperty("--lift", `${-height}px`);
  meterFill.style.width = `${percent}%`;
  meter.setAttribute("aria-valuenow", percent);
  chargeLabel.textContent = `Jump power: ${percent}%`;
  status.textContent = "Keep holding to jump higher.";

  if (heldMs >= maxChargeMs) return;
  animationFrame = requestAnimationFrame(updateJump);
}

function startJump(event) {
  if (event.code !== "Space" || event.repeat || chargeStartedAt !== null) return;
  event.preventDefault();

  chargeStartedAt = performance.now();
  figure.classList.remove("landing");
  figure.classList.add("jumping");
  status.textContent = "Jumping! Keep holding to go higher.";
  animationFrame = requestAnimationFrame(updateJump);
}

function land(event) {
  if (event.code !== "Space" || chargeStartedAt === null) return;
  event.preventDefault();

  const heldMs = Math.min(performance.now() - chargeStartedAt, maxChargeMs);
  const charge = heldMs / maxChargeMs;
  const height = minJumpHeight + charge * (maxJumpHeight - minJumpHeight);

  chargeStartedAt = null;
  cancelAnimationFrame(animationFrame);
  figure.classList.remove("jumping");
  figure.classList.add("landing");
  status.textContent = `Jump height: ${Math.round(height)} pixels`;
}

figure.addEventListener("transitionend", (event) => {
  if (event.propertyName !== "transform" || !figure.classList.contains("landing")) return;

  figure.classList.remove("landing");
  meterFill.style.width = "0";
  meter.setAttribute("aria-valuenow", "0");
  chargeLabel.textContent = "Jump power";
  status.textContent = "Ready when you are.";
});

window.addEventListener("keydown", startJump);
window.addEventListener("keyup", land);
