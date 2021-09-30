const boxes = document.querySelectorAll('div');

// ES5
let boxesES5 = Array.prototype.slice.call(boxes);
// boxesES5.forEach(function(box){
//     box.style.backgroundColor = 'green';
// });

// ES6
// Array.from(boxes).forEach(box => box.style.backgroundColor = 'green');

// console.log(boxesES6);

// ES5
// for(let i=0; i<boxesES5.length; i++){
//     if(boxesES5[i].className == 'box blue'){
//         continue;
//     }
//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor = 'blue';
// }

// ES6
// var boxesES6 = Array.from(boxes);

// for (let box of boxesES6){
//     if(box.className == 'box blue'){
//         continue;
//     }
//     box.textContent = "I'm changed";
//     box.style.backgroundColor = 'blue';
// }

let arr = Array.from('Modern Javascript');

const products = [
    {name : 'Samsuns S10', price : 3000},
    {name : 'Samsuns S8', price : 2000},
    {name : 'Samsuns S6', price : 1000},
]

console.log(Array.from(products,prd => prd.price));
console.log(Array.from(products,prd => prd.name == 'Samsuns S10'));
console.log(products.find(prd => prd.name == 'Samsuns S8'));
console.log(products.filter(prd => prd.name == 'Samsung S6'));
console.log(products.findIndex(prd => prd.price == 2000));

let numbers = ['a','b','c'];
let entries = numbers.entries();
for (let i of entries){
    console.log(i);
}

let keys = numbers.keys();
for (let i of keys){
    console.log(i);
}

let values = numbers.values();
for (let i of values){
    console.log(i);
}