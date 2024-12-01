import { scrollLinks } from './variables'

const dynamicLinksCollection = scrollLinks.children

export function changeActiveScrollLink() {
  const setActiveLink = (evt) => {
    ;[...dynamicLinksCollection].forEach((link) => {
      link.classList.remove('scroll-menu__item--active')
    })

    evt.currentTarget.classList.add('scroll-menu__item--active')
  }

  ;[...dynamicLinksCollection].forEach((link) => {
    link.addEventListener('click', setActiveLink)
  })
}
