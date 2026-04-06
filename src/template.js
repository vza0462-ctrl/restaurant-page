export function createLayout() {
  const content = document.createElement("div");

  content.innerHTML = `
    <header>
      <h1>🍴 Restaurant</h1>
      <nav>
        <button id="home">Home</button>
        <button id="menu">Menu</button>
        <button id="contact">Contact</button>
      </nav>
    </header>
    <main id="main"></main>
  `;

  return content;
}