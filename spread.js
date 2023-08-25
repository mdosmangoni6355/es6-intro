const max = Math.max(2, 3, 4, 5, 7, 6);
const numbers = [12, 34, 52, 75, 43, 98, 80,49];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

// Use spread operator to copy
const friends = [4, 7, 85, 9];
const bondhu = friends;
const dosto = [...friends]; // copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// Advanced
const sonkha = [...friends, 999]; // Add extra elements while copy
console.log(sonkha);

// Passing Array Elements as Function Arguments:
function addNumbers(a, b, c) {
    return a + b + c;
}
  
const numbers1 = [1, 2, 3];
const sum = addNumbers(...numbers1); // Equivalent to addNumbers(1, 2, 3)
console.log(sum);

// Creating Copies of Objects:
const originalObj = { a: 1, b: 2 };
const copyObj = {...originalObj};
console.log(copyObj);

// Converting NodeLists and Strings:
// const nodeList = document.querySelectorAll('.item'); // Returns a NodeList
// const arrayFromNodeList = [...nodeList];

const str = 'hello';
const charArray = [...str]; // Converts 'str' into an array of characters
console.log(charArray);