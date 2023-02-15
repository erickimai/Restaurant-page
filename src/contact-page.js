export default function contactPage() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
  
    section.id = "about";
  
    h2.textContent = "";
    p.textContent =
      "";
  
    main.append(section);
    section.append(h2);
    section.append(p);
  }