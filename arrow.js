// Function Declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b){
    return a + b;
}

// Function Expression
const add1 = function(a, b){
    return a + b;
}

// Arrow function
const add2 = (a, b) => a + b;
const add3 = (number1, number2, number3, number4) => number1 + number2 + number3 + number4;
const add4 = (num1, num2) => num1 * num2;

// const sum = add2(5, 94);
// const sum = add3(6,7,8,9);
// console.log(sum);
const multiply = add4(9,9);
console.log(multiply);