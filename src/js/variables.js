// Global variables
export const SCREEN_MD = 768;
export const SCREEN_LG = 1024;

// Sidebar variables 
export const burgerBtn = document.querySelector('.nav__link--open-menu');
export const sideBar = document.querySelector('.sidebar');
export const xBurgerBtn = sideBar.querySelector('.nav__link--close-menu');
export const sidebarLinks = sideBar.querySelector('.sidebar__links > ul');
export const sidebarButtons = sideBar.querySelector('.sidebar__button > ul');
export const fogOfWar = document.querySelector('.fog-of-war');

// Nav
export const navRight = document.querySelector('.nav__right');

// Swiper
export const swiperContainers = document.querySelectorAll('.swiper');

// Brands
export const brandsList = document.querySelector('#brands__list');
export const brandsButton = document.querySelector('#brands__btn');
export const brandText = brandsButton.querySelector('.section__button-text');
export const brandsArrowIcon = brandsButton.querySelector('.arrow-icon');

// Devices
export const devsList = document.querySelector('#devices__list');
export const devsButton = document.querySelector('#devices__btn');
export const devsText = devsButton.querySelector('.section__button-text');
export const devsArrowIcon = devsButton.querySelector('.arrow-icon');

// Header
export const scrollLinks = document.querySelector('.scroll-menu');

// Read more
// Text blocks
export const firstBlock = document.querySelector(".first-block");
export const text2 = firstBlock.querySelectorAll(".first-block__text2");
export const text3 = firstBlock.querySelectorAll(".first-block__text3");

// Toggle button and its elements
export const readButton = firstBlock.querySelector(".first-block__button");
export const buttonText = readButton.querySelector(".first-block__read-more");
export const buttonArrow = readButton.querySelector(".arrow-icon");

// Footer
export const footerTeam = document.querySelector('.footer__team > p');

// Modals
export const dialogs = document.querySelectorAll('dialog');

// Feedback
export const chatBtn = document.querySelectorAll('.nav__link--chat');
export const feedback = document.querySelector('#feedback');
export const feedbackCloseBtn = feedback.querySelector('#feedback__close-btn');
export const feedbackForm = feedback.querySelector('#feedback__form');

// Modal Call
export const callBtn = document.querySelectorAll('.nav__link--call');
export const callDialog = document.querySelector('#modal-call');
export const callCloseBtn = callDialog.querySelector('#modal-call__close-btn');
export const callForm = callDialog.querySelector('#modal-call__form');