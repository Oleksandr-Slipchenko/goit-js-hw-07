const listRef = document.getElementById('categories');

console.log(`В списке ${listRef.children.length} категории`);

const listContainRef = document.querySelectorAll('.item');

const listInfoRef = listContainRef.forEach(item =>
  console.log(
    `Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${item.lastElementChild.children.length}`,
  ),
);
