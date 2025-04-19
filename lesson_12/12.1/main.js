// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const promptBtn = document.querySelector('.data-prompt');
const redirectBtn = document.querySelector('.data-redirect');
let urlPromt = 'https://dieg.info';

promptBtn.addEventListener('click', () => {
    const url = prompt('Enter URL:', 'https://news.kh.ua');
    if (url) {
        urlPromt = url;
    } 
});

redirectBtn.addEventListener('click', () => {
    window.location.href = urlPromt;
})