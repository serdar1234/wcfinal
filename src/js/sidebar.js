const burgerBtn = document.querySelector('.nav__link--open-menu');
const xBurgerBtn = document.querySelector('.nav__link--close-menu');
const sideBar = document.querySelector('.sidebar');
const fogOfWar = document.querySelector('.fog-of-war');


function burgerFunction() {
  burgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar--hidden');
    fogOfWar.classList.toggle('active');
    console.log(sideBar, 'is here');
  });
  xBurgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar--hidden');
    fogOfWar.classList.toggle('active');
    // console.log(sideBar, 'is here');
  })
}

export { burgerFunction }
