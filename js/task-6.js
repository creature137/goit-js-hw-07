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

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    fragment.appendChild(div);

    size += 10;
  }

  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
