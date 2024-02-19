import { createBox, createTextBox } from "./elements";
import { menu } from "./menu";
import { home } from "./home";
import { contact } from './contact';

const tabs = () => {

    const body = document.querySelector('body');
    const tabs = createBox(body, 'div', 'tabs');
    const divtabs = createBox(tabs,'ul','');
    const div1 = createTextBox(divtabs, 'li', 'tab', 'Home');
    const div2 = createTextBox(divtabs, 'li', 'tab', 'Menu');
    const div3 = createTextBox(divtabs, 'li', 'tab', 'Contact');
    
    div1.addEventListener('click', () => {
        clearContent();
        home();
    })
    div2.addEventListener('click', () => {
        clearContent();
        menu();
    })
    div3.addEventListener('click', () => {
        clearContent();
        contact();
    })
}

function clearContent() {
    const body = document.querySelector('body');
    const main = document.querySelector('.main');
    if(main) {
        body.removeChild(main);
    }
}

export default tabs;