const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1. Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.

// 2.Используй массив объектов images для создания тегов img вложенных в li.

// 3. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// 4.Все элементы галереи должны добавляться в DOM за одну операцию вставки.

// 5.Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const imagesListRef = document.getElementById('gallery');
imagesListRef.classList.add('images-list');

const makeItemsOfImagesMarkup = transactions => {
  return `<li><img src="${transactions.url}" alt="${transactions.alt}" width="300" height="150" /></li>`;
};

const makeImagesList = images.map(makeItemsOfImagesMarkup).join('');

imagesListRef.insertAdjacentHTML('afterbegin', makeImagesList);

console.log(imagesListRef);

const imagesItemRef = imagesListRef.querySelectorAll('li');
imagesItemRef.forEach(image => image.classList.add('images-item'));
