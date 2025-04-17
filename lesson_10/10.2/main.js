// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const numbers = [56, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Фильтруем только чётные числа
const evenNumbers = numbers.filter(number => number % 2 === 0); // проверяем делится ли на 2 без остатка

console.log(evenNumbers); // [2, 4, 6, 8, 10]
