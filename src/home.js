import { createBox, createImg, createTextBox } from "./elements";

export const home = () => {
    const body = document.querySelector('body');
    const main = createBox(body, 'main', 'main');
    const bgMain = createBox(main, 'div', 'bgMain');
    const bg = createBox(bgMain, 'div', 'bg');
    const title = createTextBox(bg, 'h1', 'title', 'ODIN');
    const minititle = createTextBox(bg,'h3','mini-title','Restaurant Website');
    const para = createTextBox(bg, 'p', 'description','Known as the "last bastion in the Fiat World of classically rich cuisine" The Ace of Space has become a galactic institution, recognised for its culinary excellence and unparalleled attention to detail.');
}