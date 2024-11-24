import '../scss/style.scss'
import { burgerFunction } from './sidebar';

burgerFunction();
// Global variables
const SCREEN_MD = 768;
// const SCREEN_LG = 1024;

// Brand icons
const brands__list = document.querySelector('.brands__list')
const allListItems = brands__list.querySelectorAll('.swiper-slide')
// Toggle button and its elements
const brands__button = document.querySelector('.brands__button')
const brand__text = brands__button.querySelector('.brands__button-text')
const brands__arrowIcon = brands__button.querySelector('.arrow-icon')

function toggleBrands() {
  // If all brand items are displayed == true
  let allItemsDisplayed =
    brand__text.textContent === 'Показать все' ? true : false
  // Change the text
  allItemsDisplayed
  ? (brand__text.textContent = 'Скрыть')
  : (brand__text.textContent = 'Показать все')
  
  brands__list.classList.toggle('brands__list--show-brands')
  brands__arrowIcon.classList.toggle('arrow-icon--turned')
}

brands__button.addEventListener('click', toggleBrands)

// **************** Swiper *************
let swiper = null

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

initializeSwiper()

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