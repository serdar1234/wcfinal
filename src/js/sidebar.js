const burgerBtn = document.querySelector('.nav__link--open-menu')
const xBurgerBtn = document.querySelector('.nav__link--close-menu')
const sideBar = document.querySelector('.sidebar')
const fogOfWar = document.querySelector('.fog-of-war')
const swiper = document.querySelector('.swiper')

function toggleBurgerBtn() {
  sideBar.classList.toggle('sidebar--hidden')
  fogOfWar.classList.toggle('active')
  swiper.classList.toggle('swiper--hidden')
}

function burgerFunction() {
  burgerBtn.addEventListener('click', toggleBurgerBtn)
  xBurgerBtn.addEventListener('click', toggleBurgerBtn)
  fogOfWar.addEventListener('click', toggleBurgerBtn)
}

export { burgerFunction }
