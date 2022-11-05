function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
  btnCreat: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

let boxsColection = [];
let sizeBox = 30;

function createBoxes(amount) {
  for (var i = 0; i < amount; i += 1) {
    let creat = document.createElement("div");
    creat.style.width = `${sizeBox}px`;
    creat.style.height = `${sizeBox}px`;
    sizeBox += 10;
    creat.style.backgroundColor = getRandomHexColor();
    boxsColection.push(creat);
  }
}

function pushBoxs() {
  createBoxes(Number(refs.input.value));
  refs.boxes.append(...boxsColection);
}

refs.btnCreat.addEventListener("click", () => {
  pushBoxs();
});

refs.btnDestroy.addEventListener("click", () => {
  window.location.reload();
});
