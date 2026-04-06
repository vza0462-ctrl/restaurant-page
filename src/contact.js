export function loadContact() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Contact</h2>
    <p>Email: contact@restaurant.com</p>
  `;
  return div;
}