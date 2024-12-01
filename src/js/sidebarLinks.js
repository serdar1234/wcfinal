import { sidebarLinks } from './variables'

const dynamicLinksCollection = sidebarLinks.children

export function changeActiveLink() {
  const setActiveLink = (evt) => {
    ;[...dynamicLinksCollection].forEach((link) => {
      link.classList.remove('sidebar__links--active')
    })

    evt.currentTarget.classList.add('sidebar__links--active')
  }

  ;[...dynamicLinksCollection].forEach((link) => {
    link.addEventListener('click', setActiveLink)
  })
}
