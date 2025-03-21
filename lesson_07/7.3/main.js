(function (){

let index = 0;
let catTrueLife = true;

do {
   const num = prompt("Ввести число більше 100", 1313);
   index++;

if (num > 100) {
    console.log(num);
    catTrueLife = false;
    // return;
    break;
} else {
    console.log(`У кошки 13 жизней, а твое бессмертие в ошибках ${index}`);    
}

} while (index <= 3);

if (catTrueLife) {
    console.log("Твоя кошка в шоке!");
} else {
    console.log("Поздравляю, ты справился!");
}

})();