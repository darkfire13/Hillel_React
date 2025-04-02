(function (){

let index = 0;
// let catTrueLife = true;

do {
   const input = prompt("Ввести число більше 100", 1313);
   index++;

   if (!isFinite(input)) { // пользователь ввел не число
    console.log(input); 
    // catTrueLife = false;
    break;
  }
  
const num = Number(input);

if (num > 100) {
    console.log(num);
    // catTrueLife = false;
    // return;
    break;
} else {
    console.log(`У кошки 13 жизней, а твое бессмертие в ошибках ${index}`);    
}

} while (index < 10);

})();