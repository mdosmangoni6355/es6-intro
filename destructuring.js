// Object destructuring
const actor = {
    name: 'Osman',
    age: 22,
    phone: '01774230977',
    money: 50000,
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value

const {money, name} = actor;
const {phone, age: boyos} = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(money);
console.log(name);
console.log(boyos);

// Array destructuring
const numbers = [33, 87];
const [first, second] = numbers;
const [x, y] = [12,18];

// Advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom, ditiyo] = doubleThem(7, 9);
console.log(prothom, ditiyo);