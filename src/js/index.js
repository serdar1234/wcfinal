import '../scss/style.scss'
import { burgerFunction } from './burger.js'
import {
  SCREEN_MD,
  brandsButton,
  readButton,
  brandText,
  brandsList,
  brandsArrowIcon,
  swiperContainers,
  devsButton,
  devsText,
  devsList,
  devsArrowIcon,
  footerTeam,
} from './variables.js'
import { toggleBrandsFunction } from './brands.js'
import { changeActiveLink } from './sidebarLinks.js'
import { changeActiveBtn } from './sidebarBtns.js'
import { changeActiveScrollLink } from './scrollMenuLinks.js'
import { toggleText } from './readMore.js'
import { rearrangeFigure } from './rearrangeFigure.js'

footerTeam.innerHTML = `&copy; ${new Date().getFullYear()} CPS<br>Разработано командой Apesong`;
brandsButton.addEventListener('click', () => {
  toggleBrandsFunction(brandText, brandsList, brandsArrowIcon)
})
devsButton.addEventListener('click', () => {
  toggleBrandsFunction(devsText, devsList, devsArrowIcon)
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
const swipers = []
let swiper
let swipersInitialized = false // flag

function initializeSwipers() {
  if (window.matchMedia('(max-width:767.98px)').matches) {
    ;[...swiperContainers].forEach((container) => {
      swiper = new Swiper(container, {
        // Optional parameters
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 8
        }
      })
      swipers.push(swiper)
    })
    swipersInitialized = true
  }
}

function destroySwipers() {
  swipers.forEach((swiper) => {
    if (swiper) {
      swiper.destroy(true, true)
    }
  })
  swipersInitialized = false
}

if (window.innerWidth < SCREEN_MD) {
  initializeSwipers()
}

window.addEventListener('resize', function () {
  if (window.innerWidth >= SCREEN_MD) {
    // delete swiper if it is initialized
    if (swipersInitialized) {
      destroySwipers()
    }
  } else if (window.innerWidth < SCREEN_MD) {
    // initialize swiper again
    if (!swipersInitialized) {
      initializeSwipers()
    }
  }
});


// dialog

const chatBtn = document.querySelectorAll('.nav__link--chat');
const feedback = document.querySelector('.feedback');
const feedbackClose = feedback.querySelector('.feedback__close-btn');
[...chatBtn].forEach( el => {
  el.addEventListener('click', () => {
    feedback.show();
  })
})
feedbackClose.addEventListener('click', () => {
  feedback.close();
})