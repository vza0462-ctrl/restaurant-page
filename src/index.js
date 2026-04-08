// index.js
import "./styles.css";
import { createLayout } from "./template";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { getFormOrder, loadorder } from "./order";
import { loadContact } from "./contact";

const root = document.getElementById("content");

const layout = createLayout();
root.appendChild(layout);

const order = loadorder();
root.appendChild(order);

const main = document.getElementById("main");
// function to switch page
function render(page) {
  main.innerHTML = "";
  main.appendChild(page());
}

// bind events
document.getElementById("home").addEventListener("click", () => render(loadHome));
document.getElementById("menu").addEventListener("click", () => render(loadMenu));
document.getElementById("contact").addEventListener("click", () => render(loadContact));

// default page 
render(loadHome);