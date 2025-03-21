
function doSum(sum) {
    let allSum=0;
    return function(num) {
        allSum += num;
        return allSum;
      };
}
const sum = doSum();
// Когда doSum() возвращает функцию, она «запоминает» переменные, которые были внутри.
// Это и называется замыкание — функция «помнит» значение allSum между вызовами.

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

function createEmojiSum2() {
    let total = 0;
  
    return function(emoji) {
      const code = emoji.codePointAt(0);
      total += code;
  
      const START = 0x1F300; // 127744,  😀 = U+1F600 → 0x1F600
      const END = 0x1F9FF; // 129535 
      const RANGE = END - START + 1;
  
      const resultCode = START + ((total - START) % RANGE);
  
      return String.fromCodePoint(resultCode);
    };
  }
  
  const sumEmoji2 = createEmojiSum2();
  
  console.log(sumEmoji2("😀")); // В разных браузерах по разному, типо зависит от установленнго шрифта
//   console.log(sumEmoji2("😀").codePointAt(0));
  console.log(sumEmoji2("😁")); // 🎈
  console.log(sumEmoji2("😂")); // 🧤
  console.log(sumEmoji2("😅")); // 👾
  console.log(sumEmoji2("😎")); // 📷
//   console.log(sumEmoji2("😎").codePointAt(0));
  
  