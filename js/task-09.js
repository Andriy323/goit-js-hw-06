function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  changeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

refs.changeColor.addEventListener("click", changeBgColor);

function changeBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();
}
