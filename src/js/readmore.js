
import { buttonText, buttonArrow, firstBlock } from './variables.js'; 

export function toggleText() {
  // If ... are displayed == true
  let textHidden =
    buttonText.textContent === "Читать далее" ? true : false;
  // Change the text  
  textHidden
    ? (buttonText.textContent = "Скрыть")
    : (buttonText.textContent = "Читать далее");
  // test - need a text toggler here
  firstBlock.classList.toggle("first-block__text--show");
  buttonArrow.classList.toggle("arrow-icon--turned");
}