const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 
  const boxes = []; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes); 
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
