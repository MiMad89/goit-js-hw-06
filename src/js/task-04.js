const value = document.querySelector("#value");
let counterValue = 0;

const dataMinus = document.querySelector('[data-action="decrement"]');
dataMinus.addEventListener("click", (event) => {
  counterValue--
  value.innerHTML = counterValue
})

const dataPlus = document.querySelector('[data-action="increment"]');
dataPlus.addEventListener("click", (event) => {
  counterValue++
  value.textContent = counterValue
})
