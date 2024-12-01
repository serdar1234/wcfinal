export function toggleBrandsFunction(brandText, brandsList, brandsArrowIcon) {
  let allItemsDisplayed = brandText.textContent === 'Показать все'

  allItemsDisplayed
    ? (brandText.textContent = 'Скрыть')
    : (brandText.textContent = 'Показать все')

  brandsList.classList.toggle('section__list--show-items')
  brandsArrowIcon.classList.toggle('arrow-icon--turned')
}
