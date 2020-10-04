const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.getElementById('ingredients');

const makeItems = items => {
  return items.map(item => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = item;

    return listItemRef;
  });
};

const listOfLiRef = makeItems(ingredients);

listRef.append(...listOfLiRef);
