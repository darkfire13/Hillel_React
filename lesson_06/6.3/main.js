// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

// const array = [1, 3, 4, 6, 2, 5, 7];

// removeElement(array,4);

// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]


function removeElement(array, item) {
    let newArray = []; // Новый массив

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray.push(array[i]); // Добавляем только те элементы, которые НЕ равны item
        }
    }

    return newArray;
}

let array = [1, 3, 4, 6, 2, 5, 7];
let newArray = removeElement(array, 4);

console.log(newArray); // [1, 3, 6, 2, 5, 7]

array = [1, 3, 4, 6, 2, 5, 4, 1];
newArray = removeElement(array, 4);

console.log(newArray); // [1, 3, 6, 2, 5, 1]
