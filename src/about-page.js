export default function aboutPage() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  section.id = "about";

  h2.textContent = "About Us";
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nam vel enim vel ligula fringilla consectetur. Cras interdum erat tortor, a bibendum lorem sollicitudin eget. Curabitur eget pellentesque lectus. Donec vel purus vestibulum ligula tempus dapibus. Cras non fringilla eros, sit amet interdum turpis. Suspendisse ac ultrices eros. Sed venenatis ipsum arcu.";

  main.append(section);
  section.append(h2);
  section.append(p);
}
