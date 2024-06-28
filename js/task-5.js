function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = body.style.backgroundColor;
});
