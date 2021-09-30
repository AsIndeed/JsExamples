var a = 10;
var b = a;

console.log(a);
console.log(b);


var obj1 = {
    name : 'Lütfi',
    age : 27
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1);
console.log(obj2);


var num = 50;
var account = {
    name : 'Ece',
    accountNumber : '123456'
}

function update(a,b){
    a = 100;
    b.accountNumber = '111111';
}

update(num,account);

console.log(num);
console.log(account);

var products = [
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000},
    {name : 'Product name', price : 1000}
]

function filterProducts(pdr){

}

filterProducts(products);