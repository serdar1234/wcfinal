import '../scss/style.scss'
import { burgerFunction } from './burger.js';
import { SCREEN_MD, brandsButton } from './variables.js';
import { toggleBrandsFunction } from './brands.js';
import { changeActiveLink } from './sidebarLinks.js';
import { changeActiveBtn } from './sidebarBtns.js';
import { changeActiveScrollLink } from './scrollMenuLinks.js'

brandsButton.addEventListener('click', toggleBrandsFunction);
burgerFunction();
changeActiveLink();
changeActiveBtn();
changeActiveScrollLink();

// **************** Swiper *************
function initializeSwiper() {
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

let swiper = null

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