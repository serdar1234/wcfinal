!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=document.querySelector(".nav__link--open-menu"),o=document.querySelector(".nav__link--close-menu"),i=document.querySelector(".sidebar"),l=document.querySelector(".fog-of-war"),u=document.querySelector(".swiper");function c(){i.classList.toggle("sidebar--hidden"),l.classList.toggle("active"),u.classList.toggle("swiper--hidden")}r.addEventListener("click",c),o.addEventListener("click",c),l.addEventListener("click",c);var a=document.querySelector(".brands__list"),d=(a.querySelectorAll(".swiper-slide"),document.querySelector(".brands__button")),s=d.querySelector(".brands__button-text"),f=d.querySelector(".arrow-icon");d.addEventListener("click",(function(){var e="Показать все"===s.textContent;s.textContent=e?"Скрыть":"Показать все",a.classList.toggle("brands__list--show-brands"),f.classList.toggle("arrow-icon--turned")}));var p=null;function y(){window.matchMedia("(max-width:767.98px)").matches&&(p=new Swiper(".swiper",{slidesPerView:"auto",loop:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".swiper-pagination",dynamicBullets:!0,dynamicMainBullets:8}}))}y(),window.addEventListener("resize",(function(){window.innerWidth>=768&&null!==p?(p.destroy(),p=null):window.innerWidth<768&&null===p&&y()}))}]);
//# sourceMappingURL=bundle.js.map