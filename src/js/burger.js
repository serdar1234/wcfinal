import {
  SCREEN_LG,
  burgerBtn,
  xBurgerBtn,
  sideBar,
  fogOfWar,
  swiperContainers
} from './variables.js'

function toggleBurgerBtn() {
  sideBar.classList.toggle('sidebar--hidden')
  fogOfWar.classList.toggle('fog-of-war--active')
  ;[...swiperContainers].forEach((el) => {
    el.classList.toggle('swiper--hidden')
  })
}

function burgerFunction() {
  burgerBtn.addEventListener('click', toggleBurgerBtn)
  xBurgerBtn.addEventListener('click', toggleBurgerBtn)
  fogOfWar.addEventListener('click', () => {
    if (fogOfWar.classList.contains('fog-of-war--active')) toggleBurgerBtn()
  })

  window.addEventListener('resize', function () {
    if (window.innerWidth >= SCREEN_LG) {
      sideBar.classList.add('sidebar--hidden')
      fogOfWar.classList.remove('fog-of-war--active')
      ;[...swiperContainers].forEach((el) => {
        el.classList.remove('swiper--hidden')
      })
    }
  })
}

export { burgerFunction }
