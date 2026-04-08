import { createNavbar } from "./components/navbar";
import { foods } from "./data/foods";
import { getFormOrder } from "./order";

export function loadMenu() {
  
  const rootContainerMenu = document.createElement("div");
  rootContainerMenu.classList.add("root-menu-container");

  const filter = document.createElement("div");
  filter.classList.add("navbar")
  filter.innerHTML = createNavbar();
  filter.querySelector(".order-btn").addEventListener("click", (e)=>{
  });

  rootContainerMenu.appendChild(filter)

  const container = document.createElement("div");
  container.classList.add("menu-container");
  

  foods.forEach(food => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = food.id;
    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.price}</p>
      <button class="order-btn" data-id="${food.id}">Order</button>    
      `;
    card.querySelector(".order-btn").addEventListener("click", (e)=>{
      const id = e.target.dataset.id;
      console.log(`you clicked id: ${id}`);
      getFormOrder();
    })
    container.appendChild(card);
  });
  rootContainerMenu.appendChild(container);

  return rootContainerMenu;
}