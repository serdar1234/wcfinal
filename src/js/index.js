import '../scss/style.scss'
import { burgerFunction } from './burger.js'
import {
  SCREEN_MD,
  brandsButton,
  readButton,
  brandText,
  brandsList,
  brandsArrowIcon,
  devsButton,
  devsText,
  devsList,
  devsArrowIcon
} from './variables.js'
import { toggleBrandsFunction } from './brands.js'
import { changeActiveLink } from './sidebarLinks.js'
import { changeActiveBtn } from './sidebarBtns.js'
import { changeActiveScrollLink } from './scrollMenuLinks.js'
import { toggleText } from './readMore.js'
import { rearrangeFigure } from './rearrangeFigure.js'

brandsButton.addEventListener('click', () => {
  toggleBrandsFunction(brandText, brandsList, brandsArrowIcon);
})
devsButton.addEventListener('click', () => {
  toggleBrandsFunction(devsText, devsList, devsArrowIcon);
})
readButton.addEventListener('click', toggleText)
burgerFunction()
changeActiveLink()
changeActiveBtn()
changeActiveScrollLink()
rearrangeFigure()
// Listen for resize events
window.addEventListener('resize', rearrangeFigure)

// Swiper
let swiper

function initializeSwiper() {
  if (window.matchMedia('(max-width:767.98px)').matches) {
    swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 16,
      // For accessibility
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 8
      }
    })
  }
}

if (window.innerWidth < SCREEN_MD) {
  initializeSwiper()
}

window.addEventListener('resize', function () {
  if (window.innerWidth >= SCREEN_MD && swiper !== undefined) {
    // delete swiper
    swiper.destroy()
    swiper = undefined
  } else if (window.innerWidth < SCREEN_MD && swiper === undefined) {
    // initialize swiper again
    initializeSwiper()
  }
})
