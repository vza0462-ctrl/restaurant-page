import { foods } from "./data/foods";

export function loadMenu() {
  
  const rootContainerMenu = document.createElement("div");
  rootContainerMenu.classList.add("root-menu-container");

  const filter = document.createElement("div");
  filter.classList.add("navbar")
  filter.innerHTML=`
  <!-- Left -->
  <div class="nav-left">
    <h2 class="logo">Restaurant<span>.vn</span></h2>
    

    <select class="location">
      <option>TP. HCM</option>
      <option>Hà Nội</option>
    </select>

    <select class="category">
      <option>Ăn uống</option>
      <option>Cafe</option>
    </select>
  </div>

  <!-- Center -->
  <div class="nav-center">
    <input type="text" placeholder="Địa điểm, món ăn..." />
    <button class="search-btn">🔍</button>
  </div>

  <!-- Right -->
  <div class="nav-right">
    <button class="order-btn">Đặt bàn</button>
    <button class="filter-btn">⚙ Bộ lọc</button>
    <button>Apps</button>
    <button>Đăng nhập</button>
    <button class="icon">➕</button>
  </div>
  `;
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
    })
    container.appendChild(card);
  });
  rootContainerMenu.appendChild(container);

  return rootContainerMenu;
}