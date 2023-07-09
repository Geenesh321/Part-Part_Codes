const slider = document.querySelector('.image-slider__content');
        let scrollInterval;
        let slideIndex = 0;

        function startAutoSlide() {
            scrollInterval = setInterval(() => {
                if (slideIndex === slider.children.length - 1) {
                    slideIndex = 0;
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    slideIndex++;
                    slider.scrollLeft += slider.offsetWidth;
                }
            }, 3000);
        }

        function stopAutoSlide() {
            clearInterval(scrollInterval);
        }

        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);

        startAutoSlide();