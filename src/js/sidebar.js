import { SCREEN_LG, burgerBtn, xBurgerBtn, sideBar, fogOfWar, swiperSelector } from './variables.js';

function toggleBurgerBtn() {
  sideBar.classList.toggle('sidebar--hidden')
  fogOfWar.classList.toggle('active')
  swiperSelector.classList.toggle('swiper--hidden')
}

function burgerFunction() {
  burgerBtn.addEventListener('click', toggleBurgerBtn)
  xBurgerBtn.addEventListener('click', toggleBurgerBtn)
  fogOfWar.addEventListener('click', toggleBurgerBtn)
  window.addEventListener("resize", function () {
    if (window.innerWidth >= SCREEN_LG) {
      sideBar.classList.remove('sidebar--hidden');
    } else {
      sideBar.classList.add('sidebar--hidden');
    }
  });
}

export { burgerFunction }
