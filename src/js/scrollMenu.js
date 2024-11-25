import { scrollLinks } from "./variables";

const dynamicLinksCollection = scrollLinks.children;

export function changeActiveScrollLink() {
    const setActiveLink = (evt) => {
        // Remove the 'active' class from all links
        [...dynamicLinksCollection].forEach(link => {
          link.classList.remove('active');
        });
        
        // Add the 'active' class to the clicked link
        evt.currentTarget.classList.add('active');
      };
      
      // Add event listeners to each link
      [...dynamicLinksCollection].forEach(link => {
        link.addEventListener('click', setActiveLink);
      });
}