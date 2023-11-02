const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = 
  document.querySelector('#ingredients')

// const firstItem = document.createElement('li');
// firstItem.textContent = 'Potatoes';
// console.log(firstItem)

// const secondItem = document.createElement('li');
// secondItem.textContent = 'Mushrooms';
// console.log(secondItem)

const items = ingredients.map(ingredient =>
{
  const element = document.createElement('li')
  console.log(element)
  element.classList.add('item')
  element.textContent = ingredient
  return element;
})
  
ingredientsList.append(...items)

