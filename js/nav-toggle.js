function setupNavToggle() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', setupNavToggle);
document.body.addEventListener('htmx:afterSwap', (e) => {
  if (e.detail.target.matches('[data-hx-get="dynamo.nav.partial.html"]')) {
    setupNavToggle();
  }
});
