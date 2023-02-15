export default function menuPage() {
const main = document.querySelector("main");
const section = document.createElement("section");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const ul = document.createElement("ul");
  const liAbout = document.createElement("li");
  const buttonAbout = document.createElement("button");
  const liMenu = document.createElement("li");
  const buttonMenu = document.createElement("button");
  const liReserve = document.createElement("li");
  const buttonReserve = document.createElement("button");
  const liContact = document.createElement("li");

section.id = "menu";

h2.textContent = "Our Menu";
p.textContent =
  "Explore our delicious dishes and beverages.";

main.append(section);
section.append(h2);
section.append(p);
section.append(ul)
ul.append()
}