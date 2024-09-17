const inputValue = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");

function createBoxes() {
  const inputValues = inputValue.value.trim();
  const rectangles = parseInt(inputValues, 10);

  if (rectangles >= 1 && rectangles <= 100) {
    return rectangles;
  }
}

function addRectangles() {
  createButton.addEventListener("click", () => {
    const cratedRectangles = createBoxes();

    if (cratedRectangles !== null) {
      boxesDiv.innerHTML = "";

      for (let i = 0; i < cratedRectangles; i++) {
        const newRect = document.createElement("div");
        newRect.setAttribute("class", "rectangle");

        const size = 30 + i * 10;
        newRect.style.width = `${size}px`;
        newRect.style.height = `${size}px`;
        newRect.style.backgroundColor = getRandomHexColor();
        boxesDiv.insertAdjacentElement("beforeend", newRect);
      }

      inputValue.value = "";
    }
  });
}

function destroyBoxes() {
  destroyButton.addEventListener("click", () => {
    const rectanglesInBox = document.querySelectorAll(".rectangle");

    rectanglesInBox.forEach((rectangle) => rectangle.remove());
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

addRectangles();
destroyBoxes();
