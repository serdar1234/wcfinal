import { sidebarButtons } from "./variables";

const btnCollection = sidebarButtons.querySelectorAll('button');

export function changeActiveBtn() {
    const setDisabledBtn = (evt) => {
        // Remove the 'disabled' from all buttons
        [...btnCollection].forEach(btn => {
          btn.removeAttribute('disabled');
        });
        
        // Add the 'disabled' to the clicked button
        evt.currentTarget.setAttribute('disabled', 'disabled');
      };
      
      // Add event listeners to each button
      [...btnCollection].forEach(btn => {
        btn.addEventListener('click', setDisabledBtn);
      });
}