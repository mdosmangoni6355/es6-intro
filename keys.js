const phone = {
    name: 'Samsung',
    model: 'S3',
    price: 19000,
    ram: '4GB',
    rom: '64GB',
    camera: "64MP"
}

// All property names
const keys = Object.keys(phone);
// console.log(keys);

// All property values
const values = Object.values(phone);
// console.log(values);

// All Property name and values
const entries = Object.entries(phone);
// console.log(entries);
// Array of array or two dimensional array
// [
//     [ 'name', 'Samsung' ],
//     [ 'model', 'S3' ],
//     [ 'price', 19000 ],
//     [ 'ram', '4GB' ],
//     [ 'rom', '64GB' ],
//     [ 'camera', '64MP' ]
//   ]

// delete phone.camera;
// console.log(phone);

// const {rom, ...newPhone} = phone;
// console.log(newPhone);

// Freeze You can't add remove or modify anything of object
// Object.freeze(phone);
phone.source = 'Korea';
delete phone.model;
phone.price = 39000;
phone.model = 'S24 Ultra';
console.log(phone);

// You can modify or update the existing value but can't delete and add new property
// Object.seal(phone);
phone.source = 'Korea';
delete phone.model;
phone.price = 39000;
phone.model = 'S24 Ultra';
console.log(phone);