const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});
