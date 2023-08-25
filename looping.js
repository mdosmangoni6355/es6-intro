// for of use on array or string not in object
// for in use on object

const numbers = [2, 5, 8, 10, 18];
// for(let i = 0; i < numbers.length; i++){};
// while
for(const num of numbers){
    // console.log(num);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    // console.log(char);
}

const phone = {
    name: 'Samsung',
    model: 'S3',
    price: 19000,
    ram: '4GB',
    rom: '64GB',
    camera: "64MP"
}

// for(const key of phone){
//     console.log(key);
// }

for(const key in phone){
    const value = phone[key];
    // console.log(key, value);
}

// Optional
const keys = Object.keys(phone);
// console.log(keys);
for(const key of keys){
    const value = phone[key];
    console.log(key, value);
}
