function about() {
    const contentDiv = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";
    contentDiv.appendChild(aboutDiv);

    const h3 = document.createElement("h3");
    h3.innerHTML = "About"
    aboutDiv.appendChild(h3);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Odin Restaurant";
    aboutDiv.appendChild(h2);

    const hr = document.createElement("hr");
    aboutDiv.appendChild(hr);

    const textDiv = document.createElement("div");
    textDiv.id = "textDiv";
    aboutDiv.appendChild(textDiv);

    const p = document.createElement("p");
    p.id = "aboutText";
    p.innerHTML = "Odin Restaurant is a unique dining experience that transports guests to the heart of a Viking feast. Nestled in a rustic, timber-clad setting with flickering candlelight and roaring fire pits, the restaurant offers a menu that’s simple yet bold: mead and steak, perfected.";
    textDiv.appendChild(p);

    const br = document.createElement("br");
    textDiv.appendChild(br);

    const p2 = document.createElement("p");
    p2.id = "aboutText";
    p2.innerHTML = "Guests can savor thick, juicy cuts of expertly grilled steak, seasoned with ancient herbs and served with a selection of rich, hearty sides. The mead flows freely, with a variety of flavors ranging from classic honey to spiced and fruity blends. At Odin Restaurant, every meal feels like a feast worthy of the gods.";
    textDiv.appendChild(p2);

};

export { about };