export function formLayout(foods) {
  const content = document.createElement("div");

  content.innerHTML = `
    <!-- Open button -->
    <button id="orderBtn" class="open-btn">🍔 Chọn món</button>

    <!-- Modal -->
    <div id="foodModal" class="overlay hidden">
      <div class="modal">
        <h2>Chọn món ăn</h2>

        <!-- Tabs -->
        <div class="tabs">
          <button class="tab active">Món ăn</button>
          <button class="tab">Combo</button>
        </div>

        <!-- Food list -->
        <div class="list" id="foodList">
          ${foods.map(item => `<div>${item.name}</div>`).join("")}
        </div>

        <!-- Actions -->
        <div class="actions">
          <button id="okBtn">OK</button>
          <button id="cancelBtn">Cancel</button>
        </div>
      </div>
    </div>
  `;

  return content;
}