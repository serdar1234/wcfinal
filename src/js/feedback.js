import {
  fogOfWar,
  chatBtn,
  feedback,
  feedbackCloseBtn,
  sideBar,
  swiperContainers
} from './variables.js'

const closeFeedback = () => {
  feedback.close()
  fogOfWar.classList.remove('fog-of-war--modal')
}

export function feedbackFn() {
  ;[...chatBtn].forEach((el) => {
    el.addEventListener('click', () => {
      feedback.show()
      fogOfWar.classList.add('fog-of-war--modal')
      fogOfWar.classList.remove('fog-of-war--active')
      if (!sideBar.classList.contains('sidebar--hidden')) {
        sideBar.classList.add('sidebar--hidden')
        ;[...swiperContainers].forEach((el) => {
          el.classList.remove('swiper--hidden')
        })
      }
    })
  })
  feedbackCloseBtn.addEventListener('click', closeFeedback)
  fogOfWar.addEventListener('click', () => {
    if (fogOfWar.classList.contains('fog-of-war--modal')) {
      closeFeedback()
    }
  })
}
