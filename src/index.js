import mainPage from "./main-page.js";
import aboutPage from "./about-page";
import menuPage from "./menu-page.js";
import reservationsPage from "./reservations-page.js";
import "./style/main.scss";

(function () {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const liAbout = document.createElement("li");
  const buttonAbout = document.createElement("button");
  const liMenu = document.createElement("li");
  const buttonMenu = document.createElement("button");
  const liReserve = document.createElement("li");
  const buttonReserve = document.createElement("button");
  const liMain = document.createElement("li");
  const buttonMain = document.createElement("button");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  const p = document.createElement("p");

  buttonAbout.id = "about-button";
  buttonMenu.id = "menu-button";
  buttonReserve.id = "reservations-button";
  buttonMain.id = "home-button";

  content.append(header);
  header.append(nav);
  nav.append(ul);
  ul.append(liMain);
  ul.append(liAbout);
  ul.append(liMenu);
  ul.append(liReserve);
  liMain.append(buttonMain);
  liAbout.append(buttonAbout);
  liMenu.append(buttonMenu);
  liReserve.append(buttonReserve);
  content.append(main);
  content.append(footer);
  footer.append(p);

  h1.innerText = "Welcome to Our Restaurant";
  buttonMain.textContent = "Home";
  buttonAbout.textContent = "About";
  buttonMenu.textContent = "Menu";
  buttonReserve.textContent = "Reservation";
  p.innerHTML = "&copy; 2023 Restaurant Name. All rights reserved.";

  mainPage();

  buttonMain.addEventListener("click", () => {
    main.innerHTML = "";
    mainPage();
  });

  buttonAbout.addEventListener("click", () => {
    main.innerHTML = "";
    aboutPage();
  });

  buttonMenu.addEventListener("click", () => {
    main.innerHTML = "";
    menuPage();
  });

  buttonReserve.addEventListener("click", () => {
    main.innerHTML = "";
    reservationsPage();
  });
})();
