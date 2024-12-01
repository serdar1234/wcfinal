import { firstBlock } from './variables'
const figure = firstBlock.querySelector('.first-block__figure')
let figureMoved = false

export function rearrangeFigure() {
  if (window.innerWidth < 768 && !figureMoved) {
    figure.remove()
    firstBlock.appendChild(figure)
    figureMoved = true
  } else if (window.innerWidth >= 768 && figureMoved) {
    figure.remove()
    firstBlock.prepend(figure)
    figureMoved = false
  }
}
