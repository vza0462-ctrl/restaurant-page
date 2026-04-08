import { homeComponent } from "./components/homecp";

export function loadHome() {
  const div = document.createElement("div");
  div.innerHTML = homeComponent();
  return div;
}