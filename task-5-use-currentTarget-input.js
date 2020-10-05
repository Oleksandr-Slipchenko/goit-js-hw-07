// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');

const nameInputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    nameInputRef.textContent = 'незнакомец';
  } else {
    nameInputRef.textContent = event.currentTarget.value;
  }
}
