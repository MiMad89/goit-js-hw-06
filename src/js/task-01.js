
const itemLi = document.querySelectorAll('.item')
console.log(`Number of categories: ${itemLi.length}`)

const sumItemLi = itemLi.forEach(sumItem => {
  console.log(`Category: ${sumItem.querySelector('h2').textContent}\nElements: ${sumItem.querySelector('ul').children.length}`)
});


