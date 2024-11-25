import '../scss/style.scss'
import { burgerFunction } from './burger.js';
import { SCREEN_MD, brands__button } from './variables.js';
import { toggleBrandsFunction } from './brands.js';
import { changeActiveLink } from './sidebarLinks.js';
import { changeActiveBtn } from './sidebarBtns.js';
import { changeActiveScrollLink } from './scrollMenuLinks.js'
import { initializeSwiper } from './swiperFunction.js';

brands__button.addEventListener('click', toggleBrandsFunction);
burgerFunction();
changeActiveLink();
changeActiveBtn();
changeActiveScrollLink();

// **************** Swiper *************
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