// let lutfi = {
//     name:'Lütfi',
//     yearOfBirth:1994,
//     job:'Software Developer'
// }

// console.log(lutfi);

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function (){
//         return 2021 - this.yearOfBirth;
//     }
// }

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function (){
        return 2021 - this.yearOfBirth;
    }
}



let lutfi = new Person('Lütfi',1994,'Software Developer');
let ece = new Person('Ece',1996,'Editor');

console.log(lutfi.name);
console.log(lutfi.yearOfBirth);
console.log(lutfi.job);
console.log(lutfi.calculateAge());

console.log('******************');

console.log(ece.name);
console.log(ece.yearOfBirth);
console.log(ece.job);
console.log(ece.calculateAge());