document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.history__event');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('history__event--visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  blocks.forEach(b => io.observe(b));
});