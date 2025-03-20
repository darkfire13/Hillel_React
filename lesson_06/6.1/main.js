
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.


function removeChars(str, arr) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let shouldSkip = false; // Флаг, который говорит, нужно ли пропускать символ

        // Проверяем, есть ли символ в массиве arr
        for (let j = 0; j < arr.length; j++) {
            if (char === arr[j]) {
                shouldSkip = true; // Если символ найден, отмечаем, что его нужно пропустить
                break; 
            }
        }

        if (shouldSkip) continue; // Если символ найден в arr, пропускаем его

        result += char;
    }

    return result;
}

console.log(removeChars('hello world', ['l', 'd'])); // 'heo wor'
console.log(removeChars('БЕГЕМОТ😆 ИГРАЕТ В МЯЧ⚽', ['Е', 'М', 'Т'])+ ' — почти:)) как "Бог играет в мяч"' );



// Второй вариант через методы массива

function removeChars2(str, arr) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeChars2('hello world', ['l', 'd']));