export function initializeSwiper() {
    const mediaQuery = window.matchMedia('(max-width:767.98px)').matches
  
    if (mediaQuery) {
      swiper = new Swiper(".swiper", {
        // Optional parameters
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        // For accessibility
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 8,
        },
      });
    }
  }