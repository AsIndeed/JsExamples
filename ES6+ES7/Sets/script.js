// Sets (Collection - Unique value)

let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(4);
mySet.add(2); //tekrar atmaz
mySet.add('iki');
mySet.add({a:1,b:2}); 

var obj = {a:1,b:2} // adres yerini mysete eklediği için 2 tane ekleyebilir
mySet.add(obj);

val = mySet.has(1);
val = mySet.has(obj);

val = mySet.size;
mySet.delete(1);

// for(let item of mySet){
//     console.log(item);
// }

// for(let item of mySet.keys()){
//     console.log(item);
// }

// for(let item of mySet.values()){  // value ve key aynı
//     console.log(item);
// }

// for(let [key,value] of mySet.entries()){
//     console.log(key,value);
// }

console.log(Array.from(mySet));

let mySet2 = new Set([1,2,3,4]);
console.log(mySet2);

console.log(val);
console.log(mySet);

// intersect
//var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
var intersect = new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);

// difference
var diff = new Set([...mySet].filter(x=>!mySet2.has(x)));
console.log(diff)