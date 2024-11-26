import { brandText, brandsList, brandsArrowIcon } from './variables.js';

export function toggleBrandsFunction() {
    // If all brand items are displayed == true
    let allItemsDisplayed = brandText.textContent === 'Показать все';
    // Change the text
    allItemsDisplayed
    ? (brandText.textContent = 'Скрыть')
    : (brandText.textContent = 'Показать все');
    
    brandsList.classList.toggle('brands__list--show-brands');
    brandsArrowIcon.classList.toggle('arrow-icon--turned');
  }