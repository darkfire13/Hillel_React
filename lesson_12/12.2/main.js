// Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу, 
// який відслідковуватиме кліки на всіх кнопках.

const container = document.getElementById('buttonContainer');

container.addEventListener('click', (event) => {
  // Проверяем, что клик произошёл именно по кнопке
  if (event.target.tagName === 'BUTTON') {
    console.log(event);
    console.log(event.target);

    // Получаем текст кнопки
    const buttonText = event.target.textContent;
    alert(`Вы нажали: ${buttonText}`);
  }
});