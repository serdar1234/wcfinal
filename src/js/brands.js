import { brand__text, brands__list, brands__arrowIcon } from './variables.js';

export function toggleBrandsFunction() {
    // If all brand items are displayed == true
    let allItemsDisplayed = brand__text.textContent === 'Показать все';
    // Change the text
    allItemsDisplayed
    ? (brand__text.textContent = 'Скрыть')
    : (brand__text.textContent = 'Показать все');
    
    brands__list.classList.toggle('brands__list--show-brands');
    brands__arrowIcon.classList.toggle('arrow-icon--turned');
  }