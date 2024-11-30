
import { buttonText, buttonArrow, firstBlock, readButton } from './variables'; 

export function toggleText() {
  readButton.addEventListener('click', () => {
    // If ... are displayed == true
    let textHidden = buttonText.textContent === "Читать далее";
    // Change the text  
    textHidden
      ? (buttonText.textContent = "Скрыть")
      : (buttonText.textContent = "Читать далее");
    // test - need a text toggler here
    firstBlock.classList.toggle("first-block__text--show");
    buttonArrow.classList.toggle("arrow-icon--turned");
  })
}
