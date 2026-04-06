import pizzaImg from "./images/pizza.jpeg"; // WRONG

export function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("menu-container");

  const foods = [
    { id:1,name: "Burger", price: "$8", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id:2,name: "Pizza", price: "$12", img: pizzaImg },
    { id:3,name: "Salad", price: "$6", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9" },
  ];

  foods.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = food.id;
    card.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.price}</p>
      <button class="order-btn" data-id="${food.id}">Order</button>    `;
    // card.addEventListener("click", (e)=>{
    //   const id = e.currentTarget.dataset.id;
    //   console.log(`you clicked id: ${id}`);
    // })
    card.querySelector(".order-btn").addEventListener("click", (e)=>{
      const id = e.target.dataset.id;
      console.log(`you clicked id: ${id}`);
    })

    container.appendChild(card);
  });

  return container;
}