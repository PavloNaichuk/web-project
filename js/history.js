function initHistoryToggle() {
  document.querySelectorAll(".history__event").forEach((ev, idx) => {
    if (ev.dataset.toggleInit) return;
    ev.dataset.toggleInit = "true";

    const heading = ev.querySelector(".history__heading");
    const text = ev.querySelector(".history__text");
    if (!heading || !text) return;

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.textContent = "▾";
    heading.appendChild(icon);

    heading.addEventListener("click", () => {
      const collapsed = ev.classList.toggle("history__event--collapsed");
      icon.style.transform = collapsed ? "rotate(-90deg)" : "rotate(0deg)";
    });
  });
}

document.addEventListener("DOMContentLoaded", initHistoryToggle);
document.body.addEventListener("htmx:afterSwap", (e) => {
  if (e.detail.target.id === "history") {
    initHistoryToggle();
  }
});
