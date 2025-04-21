function setupAchievementsToggle() {
  document.querySelectorAll('.achievements__item').forEach(item => {
    if (item.dataset.toggleInitialized) return;
    item.dataset.toggleInitialized = 'true';

    const heading = item.querySelector('.achievements__heading');
    const years   = item.querySelector('.achievements__years');
    if (!heading || !years) return;

    years.style.display = 'none';
    heading.style.cursor = 'pointer';

    const toggleIcon = document.createElement('span');
    toggleIcon.textContent = '▸';
    toggleIcon.style.marginLeft = '8px';
    toggleIcon.style.transition = 'transform 0.2s ease';
    heading.appendChild(toggleIcon);

    heading.addEventListener('click', () => {
      const expanded = item.classList.toggle('achievements__item--expanded');
      years.style.display        = expanded ? 'block' : 'none';
      toggleIcon.style.transform = expanded ? 'rotate(90deg)' : 'rotate(0deg)';
    });
  });
}

document.addEventListener('DOMContentLoaded', setupAchievementsToggle);

document.body.addEventListener('htmx:afterSwap', e => {

  if (
    e.detail.target.id === 'achievements' ||
    e.detail.target.matches('[data-hx-get="dynamo.achievements.partial.html"]')
  ) {
    setupAchievementsToggle();
  }
});
