import { contactBox, createBox, createTextBox } from "./elements";

export const contact = () => {
    const body = document.querySelector('body');
    const main = createBox(body, 'main', 'main');
    const page = createBox(main,'div', 'contact-page');
    const header = createTextBox(page,'h1','header','Contact');
    const boxes = createBox(page,'div','boxes');
    const box1 = contactBox(boxes,"Shop 1","OdinShopOne@gmail.com","No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER");
    const box2 = contactBox(boxes,"Shop 2","OdinShopTwp@gmail.com","No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER");
    const box3 = contactBox(boxes,"Shop 3","OdinShopThree@gmail.com","No.34, Street(9), Bayyern Quarter(2), North Hedelberg, GER");

    const footer = createTextBox(page,'footer','link','Made with love by KMM');
}
