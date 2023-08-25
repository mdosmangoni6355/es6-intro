// When not set the default value in the parameter and arguments will be not empty
function add(num1, num2){
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum;
}
add(10, 15);

// When Set the default value in the parameter and arguments will be empty
function add1(num1 = 1, num2 = 2){
    const sum = num1 + num2;
    console.log(num1, num2, sum)
    return sum;
}
add1(8);

function fullName(first, last = ''){
    const name = first + ' ' + last;
    console.log(first, last, name);
    return name;
}
fullName('Osman');