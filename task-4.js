// Создай переменную "counterValue" в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueRef = document.querySelector('#value').textContent;

const btnIncrRef = document.querySelector('[data-action="increment"]');

const btnDecrRef = document.querySelector('[data-action="decrement"]');

let counterValue = Number(counterValueRef);

btnIncrRef.addEventListener('click', onIncrement);

btnDecrRef.addEventListener('click', onDecrement);

function onIncrement(event) {
  counterValue += 1;
  const result = String(counterValue);
  document.querySelector('#value').textContent = result;
}

function onDecrement(event) {
  counterValue -= 1;
  const result = String(counterValue);
  document.querySelector('#value').textContent = result;
}
