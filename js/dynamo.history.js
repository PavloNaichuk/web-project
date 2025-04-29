function initHistorySlider() {
    const slides = Array.from(document.querySelectorAll('.slider__slide'));
    const dotsContainer = document.querySelector('.slider__dots');
    const track = document.querySelector('.slider__track');

    if (!slides.length || !dotsContainer || !track) return;

    let currentIndex = 0;

    slides.forEach((slide, i) => {
        slide.style.left = `${i * 100}%`;
        slide.classList.remove('current');
    });
    slides[0].classList.add('current');

    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('slider__dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.index = i;
        dotsContainer.append(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function goToSlide(newIndex) {
        track.style.transform = `translateX(-${newIndex * 100}%)`;
        slides[currentIndex].classList.remove('current');
        dots[currentIndex].classList.remove('active');
        slides[newIndex].classList.add('current');
        dots[newIndex].classList.add('active');
        currentIndex = newIndex;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            goToSlide(Number(e.currentTarget.dataset.index));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initHistorySlider();
});

document.body.addEventListener('htmx:afterSwap', (e) => {
    if (e.detail.target.id === 'history') {
        initHistorySlider();
    }
});
