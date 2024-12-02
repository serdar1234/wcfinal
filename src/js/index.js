import '../scss/style.scss'
import { burgerFunction } from './burger.js'
import {
  SCREEN_MD,
  brandsButton,
  brandText,
  brandsList,
  brandsArrowIcon,
  swiperContainers,
  devsButton,
  devsText,
  devsList,
  devsArrowIcon,
  footerTeam,
  navRight
} from './variables.js'

import { toggleBrandsFunction } from './brands.js'
import { changeActiveLink } from './sidebarLinks.js'
import { changeActiveBtn } from './sidebarBtns.js'
import { changeActiveScrollLink } from './scrollMenuLinks.js'
import { toggleText } from './readMore.js'
import { rearrangeFigure } from './rearrangeFigure.js'

// function expressions
import { feedbackFn } from './feedback.js'
import { callFn } from './callDialog.js'

footerTeam.innerHTML = `&copy; ${
  new Date().getFullYear() - 5
} CPS<br>Разработано командой Apesong`

brandsButton.addEventListener('click', () => {
  toggleBrandsFunction(brandText, brandsList, brandsArrowIcon)
})
devsButton.addEventListener('click', () => {
  toggleBrandsFunction(devsText, devsList, devsArrowIcon)
})

toggleText()
burgerFunction()
changeActiveLink()
changeActiveBtn()
changeActiveScrollLink()
rearrangeFigure()
window.addEventListener('resize', rearrangeFigure)

// Swiper
const swipers = []
let swiper
let swipersInitialized = false

function initializeSwipers() {
  if (window.matchMedia('(max-width:767.98px)').matches) {
    ;[...swiperContainers].forEach((container) => {
      swiper = new Swiper(container, {
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
    if (swipersInitialized) {
      destroySwipers()
    }
  } else if (window.innerWidth < SCREEN_MD) {
    if (!swipersInitialized) {
      initializeSwipers()
    }
  }
})

// safari top bug fix
const isSafariLatest =
  navigator.userAgent.includes('Safari') &&
  (navigator.userAgent.includes('Version/17') ||
    navigator.userAgent.includes('Version/18'));
if (isSafariLatest) {
  console.log(navigator.userAgent)
  navRight.classList.add('nav__right--top-0')
}
