document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.showcase-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('arrow-next');
        const prevButton = document.getElementById('arrow-prev');
        const slideWidth = slides[0].getBoundingClientRect().width;

        let currentIndex = 0;

        // Arrange slides next to one another
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }
        
        const updateSlide = () => {
             track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // When I click left, move slides to the left
        prevButton.addEventListener('click', e => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlide();
        });

        // When I click right, move slides to the right
        nextButton.addEventListener('click', e => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
        });
      
        // Auto-advance slides
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlide();
        }, 5000);
    }
});