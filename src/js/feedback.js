import {
  dialogs,
  fogOfWar,
  sideBar,
  swiperContainers,
  chatBtn,
  feedbackCloseBtn,
  feedback,
  feedbackForm
} from './variables'

const arrayOfVariables = [
  dialogs,
  fogOfWar,
  sideBar,
  swiperContainers,
  chatBtn,
  feedbackCloseBtn,
  feedback,
  feedbackForm
]

const closeDialog = (dialog, fog) => {
  dialog.close()
  fog.classList.remove('fog-of-war--modal')
}

export function dialogFn(arr) {
  const [dialogs, fog, sidebar, swipers, openbtn, closebtn, dialog, form] = arr

  ;[...openbtn].forEach((el) => {
    el.addEventListener('click', () => {
      dialog.show()
      fog.classList.add('fog-of-war--modal')
      fog.classList.remove('fog-of-war--active')

      if (!sidebar.classList.contains('sidebar--hidden')) {
        sidebar.classList.add('sidebar--hidden')
        ;[...swipers].forEach((el) => {
          el.classList.remove('swiper--hidden')
        })
      }
    })
  })
  fog.addEventListener('click', () => {
    if (fog.classList.contains('fog-of-war--modal')) {
      fog.classList.remove('fog-of-war--modal')
      ;[...dialogs].forEach((el) => {
        el.close()
      })
    }
  })
  closebtn.addEventListener('click', () => {
    closeDialog(dialog, fog)
  })

  dialog.addEventListener('submit', (evt) => {
    evt.preventDefault()
    fog.classList.remove('fog-of-war--modal')
    closeDialog(dialog, fog)
    form.reset()
  })
}

export const feedbackFn = dialogFn(arrayOfVariables)
