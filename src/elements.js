export const createTextBox = (parent, type, classes, text ) => {
    const newBox = document.createElement(type);
    newBox.setAttribute("class", classes);
    newBox.textContent = text;
    parent.appendChild(newBox);
    return newBox;
};

export const contactBox = (parent, Shopname, email, address) => {
  const box = createBox(parent,'div','box');
  const h2 = document.createElement('h2');
  h2.textContent = Shopname;
  const h4 = document.createElement('h4');
  h4.textContent = email;
  const p = document.createElement('p');
  p.textContent = address;
  box.appendChild(h2);
  box.appendChild(h4);
  box.appendChild(p);

}

export const createBox = (parent, type, classes) => {
    const newBox = document.createElement(type);
    newBox.setAttribute("class", classes);
    parent.appendChild(newBox);
    return newBox;
};

export const createNavbar = (parent, name, subElements) => {
    const mainElement = document.createElement("nav");
    mainElement.setAttribute("class", `navbar ${name}` );
    mainElement.setAttribute("role", "navigation");
    const elementArray = [];
    subElements.forEach((obj) => {
      const a = document.createElement("a");
      a.setAttribute("class", `${name}__navlink navlink navlink-${obj.class}`);
      a.textContent = obj.text;
      mainElement.appendChild(a);
      elementArray.push(a);
    });
  
    parent.appendChild(mainElement);
    return elementArray
  };

  export const createFoodCard = (parent, food) => {
    const card = createBox(parent,"div" ,"food-card");

    createTextBox(card, "h3", "food-card__title", food.name);
    createTextBox(card, "h4", "food-card__price", food.price);
    createTextBox(card, "p", "food-card__desc", food.desc);
    createImg(card, "img", "food-card__img", food.img);
    
  }

  export const createImg = (parent, type, classes, src) => {
    const newImg = document.createElement("img");
    newImg.setAttribute("class", classes);
    newImg.setAttribute("src", src);
    parent.appendChild(newImg);
    return newImg;
  };