const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsLi = document.querySelector("#ingredients");
console.log(ingredientsLi);
ingredients.forEach((ingredient) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingredient;
  itemLi.setAttribute("class", "item");
  ingredientsLi.append(itemLi);
});
