import { buttonText, buttonArrow, firstBlock, readButton } from './variables'

export function toggleText() {
  readButton.addEventListener('click', () => {
    let textHidden = buttonText.textContent === 'Читать далее'

    textHidden
      ? (buttonText.textContent = 'Скрыть')
      : (buttonText.textContent = 'Читать далее')

    firstBlock.classList.toggle('first-block__text--show')
    buttonArrow.classList.toggle('arrow-icon--turned')
  })
}
