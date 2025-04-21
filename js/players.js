document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.players__card').forEach(card => {
    card.addEventListener('click', () => {
      console.log('Clicked player:', card.querySelector('.players__name').innerText);
    });
  });
});