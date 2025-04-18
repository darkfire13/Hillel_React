// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

console.log(randomImage);
function getRandomImage() {
// const container = document.getElementsByClassName('container')[0];
const container = document.querySelector('.container.text-center');

const img = document.createElement('img');
img.src = `img/${randomImage}`;
img.alt = 'Описание картинки';
img.style.maxWidth = '640px'; // максимальная ширина 300 пикселей
img.style.height = 'auto';    // чтобы сохранить пропорции
// document.body.appendChild(img);

container.appendChild(img);

}
getRandomImage();