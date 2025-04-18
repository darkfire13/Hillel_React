// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

const container = document.getElementsByClassName('js-color')[0];

const btn = document.getElementById('change-btn');
btn.addEventListener('click', () => {
  // console.log(container);
  container.style.color = container.style.color === 'red' ? 'black' : 'red';
});
