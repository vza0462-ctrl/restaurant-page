export function createOrderForm(emptyTable, menu) {
  return `
    <div>
      <span id="closeForm" class="close">&times;</span>

      <h2>Đặt bàn</h2>

      <form id="orderinfo">
        <input type="text" name="customer" placeholder="Tên khách hàng" required />
        <input type="text" name="phone" placeholder="Số điện thoại" required />

        <select name="table">
          <option value="">---chon ban---</option>
          ${emptyTable.map(item => `<option>${item}</option>`).join("")}
        </select>

        <div class="dropdown">
          <h4>order list</h4>
          <button type="button" id="orderBtn">🍔 Chọn món</button>

          <ul class="dropdown-list">
            ${menu.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  `;
}