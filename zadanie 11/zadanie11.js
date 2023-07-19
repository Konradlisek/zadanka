const button = document.querySelector("button");
const p = document.querySelector("#opis");

button.addEventListener("click", () => {
  p.textContent = "dowolny tekst";
});
