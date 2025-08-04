document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.showcase-track');
    const slides = document.querySelectorAll('.showcase-slide');
    const dotsContainer = document.querySelector('.showcase-dots');
    const prevButton = document.getElementById('arrow-prev');
    const nextButton = document.getElementById('arrow-next');
    const heroBackground = document.querySelector('.hero-background');
    const heroText = document.querySelector('.hero-content p');
    const modeToggle = document.getElementById('modeToggle');
    const modeLabel = document.getElementById('modeLabel');
    const modeImage = document.getElementById('modeImage');
    
    let currentIndex = 0;
    
    // Initial text fade out after 3 seconds
    setTimeout(() => {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        // Wait for fade out to complete before hiding
        setTimeout(() => {
            heroText.style.visibility = 'hidden';
        }, 1000);
    }, 4000);
    
    // Create dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }
    
    async function updateBackground(isInitialLoad = false) {
        // First set opacity to 0 for smooth transition
        heroBackground.style.opacity = '0';
        
        // Wait for fade out
        await new Promise(resolve => setTimeout(resolve, isInitialLoad ? 1000 : 300));
        
        if (currentIndex === 0) {
            // For default.png (cover), set no background
            heroBackground.style.backgroundImage = 'none';
            heroBackground.style.backgroundColor = 'transparent';
        } else {
            // For other slides, use the corresponding photo with better opacity
            const photoPath = `./Media/raccons in art/photos/${currentIndex}.png`;
            console.log('Setting background image:', photoPath);
            heroBackground.style.backgroundImage = `url('${photoPath}')`;
            heroBackground.style.backgroundColor = 'transparent';
        }
        
        // Fade in the new background with reduced opacity for better text readability
        setTimeout(() => {
            heroBackground.style.opacity = '0.2';
        }, isInitialLoad ? 500 : 50);
    }
    
    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
        updateBackground(false);
    }
    
    // Initialize background with first slide (blank for cover)
    // Start with opacity 0
    heroBackground.style.opacity = '0';
    heroBackground.style.transition = 'opacity 2s ease-in-out'; // Slower initial transition
    updateBackground(true); // Pass true for initial load
    
    // Reset to faster transitions after initial load
    setTimeout(() => {
        heroBackground.style.transition = 'opacity 0.5s ease-in-out';
    }, 3000);
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    });
    
    // Optional: Auto-advance slides
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }, 6000); // Increased to 6 seconds for better user experience
    
    modeToggle.addEventListener('change', function() {
        if (this.checked) {
            modeLabel.textContent = 'Dark Mode';
            modeImage.src = './Media/modes/dark mode.png';
        } else {
            modeLabel.textContent = 'Light Mode';
            modeImage.src = './Media/modes/light mode.png';
        }
    });
}); 