const changeColorButton = document.querySelector('button.change-color');
const setBodyColor = document.querySelector('body');
const spanColor = document.querySelector('span.color');

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  setBodyColor.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
