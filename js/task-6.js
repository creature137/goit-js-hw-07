function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const elAmount = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  if (elAmount.value >= 1 && elAmount.value <= 100) {
    createBoxes(elAmount.value);
    elAmount.value = "";
  }
});

destroyBtn.addEventListener("click", () => destroyBoxes());

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );

    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
