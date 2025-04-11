// contentScript.js
const targetZone = "America/Chicago"; // Change this to your preferred zone

function showTooltip(text) {
  removeTooltip(); // Clean up any existing

  const tooltip = document.createElement("div");
  tooltip.className = "time-tooltip";
  tooltip.textContent = text;

  Object.assign(tooltip.style, {
    position: "absolute",
    background: "#333",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "14px",
    zIndex: 9999,
    pointerEvents: "none",
    top: `${mouseY}px`,
    left: `${mouseX}px`,
  });

  document.body.appendChild(tooltip);
  setTimeout(removeTooltip, 5000);
}

function removeTooltip() {
  const existing = document.querySelector(".time-tooltip");
  if (existing) existing.remove();
}

let mouseX = 0,
  mouseY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX + 10;
  mouseY = e.clientY + 10;
});

document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim();
  if (!selection) return;

  const converted = convertTime(selection, targetZone);
  if (converted) {
    showTooltip(converted);
  }
});
