document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stadium__image').forEach(img => {
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });
});