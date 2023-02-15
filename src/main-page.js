import menuPage from "./menu-page";

export default function mainPage() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  section.id = "hero";
  button.id = "menu-view-button";

  main.append(section);
  section.append(h1);
  section.append(p);
  section.append(button);

  h1.textContent = "Welcome to Our Restaurant";
  p.textContent = "Experience our unique dishes and exquisite service.";
  button.textContent = "View Our Menu";
  button.addEventListener("click", () => {
    main.innerHTML = "";
    menuPage();
  });
}
