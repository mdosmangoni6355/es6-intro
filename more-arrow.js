const difference = (x,y) => x+y;
const multiply = (first, second, third) => first + second + third;

// single or one parameter
const getAge = (person) => person.name;
const student = {name: 'Khakon', age: 23};
const age = getAge(student);
console.log(age);

const getArray = (numbers) => numbers[3];
const array = getArray([3,5,6,8,9]);
console.log(array);

const doubleIt = number => number * 2;
console.log();

// No parameter
const getPI = () => Math.PI;
console.log(getPI());

// Large arrow function if you want to get anything returned from this function. Then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;

}
