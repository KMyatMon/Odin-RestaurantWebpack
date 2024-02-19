import { createBox, createFoodCard, createNavbar, createTextBox } from "./elements";
import * as foodArray from "./menu-items";

const populateMenu = (parent, foodArray) => {
    parent.textContent = "";
    foodArray.forEach((foodObj) => createFoodCard(parent, foodObj))
  }

export const menu = () => {
    const body = document.querySelector('body');
    const main = createBox(body, 'main', 'main');
    const menuMain = createBox(main, 'div', 'menuMain');
    const title = createTextBox(menuMain, 'h1', 'menu-title', 'Menu');
    const menuNav = createNavbar(menuMain, "menu-navbar", [
        {class: "burgers", text: "Burgers"},
        {class: "sides", text: "Sides"},
        {class: "drinks", text: "Drinks"},
        {class: "dessert", text: "Dessert"},
      ]);
    const section = createBox(menuMain, 'section', 'menu-section');
    const menuContent = createBox(section,'div', 'menu-content');
    const populatedMenu = () => {
        populateMenu(menuContent, foodArray.allitems);
    }
    menuNav[0].addEventListener("click", () => populateMenu(menuContent, foodArray.burgers));
    menuNav[1].addEventListener("click", () => populateMenu(menuContent, foodArray.sides));
    menuNav[2].addEventListener("click", () => populateMenu(menuContent, foodArray.drinks));
    menuNav[3].addEventListener("click", () => populateMenu(menuContent, foodArray.dessert));
    populatedMenu();

}