// index.js
import { greeting } from "./greeting.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./styles.css";

about();

function refreshContentDiv() {
    const contentDiv = document.querySelector("#content");
    contentDiv.remove();
    
    const newContentDiv = document.createElement("div");
    newContentDiv.id = "content";
    document.body.appendChild(newContentDiv);
};

function setupButton(buttonSelector, callback) {
    const button = document.querySelector(buttonSelector);
    button.addEventListener('click', () => {
        refreshContentDiv();
        callback();
    });
}

setupButton("#home", home);
setupButton("#menu", menu);
setupButton("#about", about);
