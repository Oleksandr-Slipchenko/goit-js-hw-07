/*
  Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
  на правильное количество символов.
  Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
  Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 */

const inputRef = document.querySelector('#validation-input');
const dataRef = document.querySelector('#validation-input').dataset.length;

function onInputChange(event) {
  if (Number(event.currentTarget.value.length) !== Number(dataRef)) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');

    inputRef.classList.add('valid');
  }
}
inputRef.addEventListener('blur', onInputChange);
