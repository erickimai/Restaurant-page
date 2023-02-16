export default function menuPage() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  const liAppetizer = document.createElement("li");
  const h3Appetizer = document.createElement("h3");
  const ulAppetizer = document.createElement("li");
  const liAppetizer1 = document.createElement("li");
  const liAppetizer2 = document.createElement("li");
  const liAppetizer3 = document.createElement("li");

  section.id = "menu";

  h2.textContent = "Our Menu";
  p.textContent = "Explore our delicious dishes and beverages.";
  h3Appetizer.textContent = "Appetizers";
  liAppetizer1.textContent = "Appetizer 1";
  liAppetizer2.textContent = "Appetizer 2";
  liAppetizer3.textContent = "Appetizer 3";

  main.append(section);
  section.append(h2);
  section.append(p);
  section.append(ul);
  ul.append(liAppetizer);
  liAppetizer.append(h3Appetizer);
  liAppetizer.append(ulAppetizer);
  ulAppetizer.append(liAppetizer1);
  ulAppetizer.append(liAppetizer2);
  ulAppetizer.append(liAppetizer3);
}
