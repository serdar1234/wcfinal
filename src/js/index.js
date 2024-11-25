import '../scss/style.scss'
import { burgerFunction } from './burger.js';
import { SCREEN_MD, brands__button } from './variables.js';
import { toggleBrandsFunction } from './brands.js';
import { changeActiveLink } from './sidebarLinks.js';

brands__button.addEventListener('click', toggleBrandsFunction);

burgerFunction();
changeActiveLink();
// **************** Swiper *************
let swiper = null

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

initializeSwiper();

window.addEventListener("resize", function () {
  if (window.innerWidth >= SCREEN_MD && swiper !== null) {
    // delete swiper
    swiper.destroy();
    swiper = null;
  } else if (window.innerWidth < SCREEN_MD && swiper === null) {
    // initialize swiper again
    initializeSwiper();
  }
});