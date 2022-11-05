const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");
const newInput = (e) => {
  mySpan.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    mySpan.textContent = "Anonymous";
  }
};
myInput.addEventListener("input", newInput);
console.log(mySpan);
