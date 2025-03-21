function multiplyBy2 (x1) {
    return function(x2) {
        return x1 * x2;
}
}
const name1 = multiplyBy2;

console.log(name1(2)(3));
console.log(name1(2)(4));

const name2 = multiplyBy2(3);

console.log(name2(3));
console.log(name2(0));
console.log(name2(1));
console.log(name2(4));