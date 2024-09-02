import meadImage from "./mead.jpg";
import steakImage from "./steak.jpg";

function menu() {
    const contentDiv = document.querySelector("#content");

    const beverageDiv = document.createElement("div");
    beverageDiv.id = "beverageDiv";
    contentDiv.appendChild(beverageDiv);

    const beverage = document.createElement("h2");
    beverage.innerHTML = "Beverage";
    beverageDiv.appendChild(beverage);

    const mead = document.createElement("h3");
    mead.innerHTML = "Mead";
    beverageDiv.appendChild(mead);

    const meadImg = document.createElement("img");
    meadImg.src = meadImage;
    meadImg.id = "meadImage"
    beverageDiv.appendChild(meadImg);

    const hr = document.createElement("hr");
    beverageDiv.appendChild(hr);

    const mainDishDiv = document.createElement("div");
    mainDishDiv.id = "mainDishDiv"
    contentDiv.appendChild(mainDishDiv);

    const mainDish = document.createElement("h2");
    mainDish.innerHTML = "Main Dish";
    mainDishDiv.appendChild(mainDish);

    const steak = document.createElement("h3");
    steak.innerHTML = "Steak";
    mainDishDiv.appendChild(steak);

    const steakImg = document.createElement("img");
    steakImg.src = steakImage;
    steakImg.id = "steakImage"
    mainDishDiv.appendChild(steakImg);
}

export { menu };