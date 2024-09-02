function home() {
    const contentDiv = document.querySelector("#content");

    const welcomePText = document.createElement("p");
    welcomePText.innerHTML = "WELCOME TO";
    welcomePText.id = "welcomePText";
    contentDiv.appendChild(welcomePText);

    const restaurantNameH1 = document.createElement("h1");
    restaurantNameH1.innerHTML = "Odin Restaurant";
    restaurantNameH1.id = "restaurantNameH1";
    contentDiv.appendChild(restaurantNameH1);

    const quotePText = document.createElement("p");
    quotePText.innerHTML = "~The best food in Asgard"
    quotePText.id = "quotePText"
    contentDiv.appendChild(quotePText);
}

export { home };