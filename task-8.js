function createBox(n) {
  const size = 30;
  const items = Array(n)
    .fill()
    .map((_, i) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const str = `width: ${size + 10 * i}px; height: ${
        size + 10 * i
      }px; background-color: #${randomColor};`;
      return `<div style="${str}"></div>`;
    })
    .reduce((acc, next) => `${acc}${next}`, '');
  const el = document.createElement('div');
  el.setAttribute('id', 'boxes');
  el.innerHTML = items;
  document.body.appendChild(el);
}

createBox(10);

// console.log(createBox(5));
