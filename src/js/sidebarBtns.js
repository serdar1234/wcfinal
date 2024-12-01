import { sidebarButtons } from './variables'

const btnCollection = sidebarButtons.querySelectorAll('button')

export function changeActiveBtn() {
  const setDisabledBtn = (evt) => {
    ;[...btnCollection].forEach((btn) => {
      btn.removeAttribute('disabled')
    })

    evt.currentTarget.setAttribute('disabled', 'disabled')
  }

  ;[...btnCollection].forEach((btn) => {
    btn.addEventListener('click', setDisabledBtn)
  })
}
