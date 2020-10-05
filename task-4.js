// Создай переменную "counterValue" в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValueRef = document.getElementById('value').textContent;

// console.log(counterValueRef);

const btnIncrRef = document.querySelector('[data-action="increment"]');
// console.log(btnIncrRef);

const btnDecrRef = document.querySelector('[data-action="decrement"]');

// console.log(btnDecrRef);

let counterValue = 0;

btnIncrRef.addEventListener('click', value => {
  if (value.target) {
    counterValue += 1;
    counterValueRef = String(counterValue);
  }
  return counterValueRef;
});
