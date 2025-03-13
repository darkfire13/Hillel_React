// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let num = +prompt("Введите число:");

if (isNaN(num) || num <= 1) {
    console.log("Ошибка: Введите корректное положительное число!");
} else {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} - простое число`);
    } else {
        console.log(`${num} - составное число`);
    }
}
