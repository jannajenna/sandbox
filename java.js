const templateElement = document.querySelector("#myTemplate").content;

const myClone = templateElement.cloneNode(true);

myClone.querySelector("h1").textContent = "Clone";

const parentElement = document.querySelector("body");

parentElement.appendChild(myClone);
