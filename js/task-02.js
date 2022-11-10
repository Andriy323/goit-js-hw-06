const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")

const lists = ingredients.map((ingredient) =>{
const list = document.createElement("li")
list.textContent = ingredient
list.classList.add("item")
return list
})
console.log(list.append(...lists))