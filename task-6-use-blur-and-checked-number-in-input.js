/*
  Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
  на правильное количество символов.
  Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
  Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 */

const inputRef = document.querySelector('#validation-input');
console.log(inputRef);
const dataRef = document.querySelector('#validation-input').dataset.length;

function onInputChange(event) {
  if (Number(event.currentTarget.value.length) === Number(dataRef)) {
    console.log('yes');

    inputRef.classList.add('valid');
  } else {
    console.log('no');

    inputRef.classList.add('invalid');
  }
}

inputRef.addEventListener('blur', onInputChange);
