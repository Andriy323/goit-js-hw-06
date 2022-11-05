const arrayCategories = document.querySelectorAll(".item")
console.log(`Number of categories:${arrayCategories.length}`)
arrayCategories.forEach((name) => {
console.log(`Category: ${name.firstElementChild.textContent}`)
console.log(`Elements: ${name.lastElementChild.children.length}`)
});

