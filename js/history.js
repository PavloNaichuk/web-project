// js/history.js

function initHistoryToggle() {
  document.querySelectorAll('.history__event').forEach((ev, idx) => {
    // унікальна ініціалізація
    if (ev.dataset.toggleInit) return;
    ev.dataset.toggleInit = 'true';

    // стрілка
    const heading = ev.querySelector('.history__heading');
    const text    = ev.querySelector('.history__text');
    if (!heading || !text) return;

    const icon = document.createElement('span');
    icon.className = 'toggle-icon';
    icon.textContent = '▾'; // вниз
    heading.appendChild(icon);

    // обробник кліку — сховати/показати текст
    heading.addEventListener('click', () => {
      const collapsed = ev.classList.toggle('history__event--collapsed');
      icon.style.transform = collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
    });
  });
}

// при першому завантаженні та після HTMX-свопу
document.addEventListener('DOMContentLoaded', initHistoryToggle);
document.body.addEventListener('htmx:afterSwap', e => {
  if (e.detail.target.id === 'history') {
    initHistoryToggle();
  }
});
