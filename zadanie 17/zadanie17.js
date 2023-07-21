const button = document.querySelector("button");
const container = document.querySelector("#container");
const namee = document.querySelector("#name");
const surname = document.querySelector("#surname");
const phone = document.querySelector("#phone");

const inputName = document.querySelector(".new-name");
const inputSurname = document.querySelector(".new-surname");
const inputPhone = document.querySelector(".new-phone");

button.addEventListener("click", function () {
  namee.textContent = inputName.value;
  surname.textContent = inputSurname.value;
  phone.textContent = inputPhone.value;
});
