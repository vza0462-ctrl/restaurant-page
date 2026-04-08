export function createNavbar(){
    return `
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
}