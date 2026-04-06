export function loadHome() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Welcome</h2>
    <p>Best food in town 🍔</p>
  `;
  return div;
}