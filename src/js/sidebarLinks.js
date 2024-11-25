import { sideBar } from "./variables";

const sidebarLinks = sideBar.querySelector('.sidebar__links > ul');
const dynamicLinksCollection = sidebarLinks.children;

export function changeActiveLink() {
    const setActiveLink = (evt) => {
        // Remove the 'active' class from all links
        [...dynamicLinksCollection].forEach(link => {
          link.classList.remove('sidebar__links--active');
        });
        
        // Add the 'active' class to the clicked link
        evt.currentTarget.classList.add('sidebar__links--active');
      };
      
      // Add event listeners to each link
      [...dynamicLinksCollection].forEach(link => {
        link.addEventListener('click', setActiveLink);
      });
}