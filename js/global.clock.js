function startClock() {
  const el = document.getElementById('clock');
  if (!el || el.dataset.clockStarted) return;
  el.dataset.clockStarted = 'true';

  const pad = n => String(n).padStart(2, '0');

  function update() {
    const now = new Date();
    el.textContent = [
      pad(now.getHours()),
      pad(now.getMinutes()),
      pad(now.getSeconds())
    ].join(':');
  }

  update();
  setInterval(update, 1000);
}
document.body.addEventListener('htmx:afterSwap', startClock);

startClock();

