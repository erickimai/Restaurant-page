export default function reservationsPage() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const form = document.createElement("form");
  const nameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const phoneLabel = document.createElement("label");
  const dateLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const phoneInput = document.createElement("input");
  const dateInput = document.createElement("input");
  const submit = document.createElement("button");

  section.id = "reservations";
  nameLabel.setAttribute("for", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "text");
  nameInput.id = "name";
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.id = "email";
  phoneLabel.setAttribute("for", "phone");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("name", "phone");
  phoneInput.id = "phone";
  dateLabel.setAttribute("for", "date");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");
  dateInput.id = "date";
  submit.setAttribute("type", "submit");

  h2.textContent = "Reservations";
  p.textContent = "Make a reservation to enjoy our dishes and service.";
  nameLabel.textContent = "Name:";
  emailLabel.textContent = "Email:";
  phoneLabel.textContent = "Phone:";
  dateLabel.textContent = "Date:";
  submit.textContent = "Make Reservation";

  main.append(section);
  section.append(h2);
  section.append(p);
  section.append(form);
  form.append(nameLabel);
  nameLabel.append(nameInput);
  form.append(emailLabel);
  emailLabel.append(emailInput);
  form.append(phoneLabel);
  phoneLabel.append(phoneInput);
  form.append(dateLabel);
  dateLabel.append(dateInput);
  form.append(submit);
}
