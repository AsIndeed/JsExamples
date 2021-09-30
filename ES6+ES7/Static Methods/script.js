// // ES5
// var PersonES5 = function(name,job,yearOfBirth){
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }

// PersonES5.prototype.calculateAge = function(){
//     return 2021 - this.yearOfBirth;
// }

// var lutfi = new PersonES5('Lütfi','At',1994);
// console.log(lutfi.calculateAge());
// console.log(lutfi);

// // ES6
// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calculateAge(){
//         return 2021-this.yearOfBirth;
//     }

//     static sayHi(){
//         console.log('Hello there General Kenobi');
//     }
// }

// let ece = new PersonES6('Ece','Editor',1996);
// console.log(ece.calculateAge());
// console.log(ece);

// PersonES6.sayHi();

class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1,d2));
