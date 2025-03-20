// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    
    // return Math.floor(sum / count);
    return sum / count;
}

let arr = ['test', 2, '3', 4, 5];
console.log(calculateAverage(arr));