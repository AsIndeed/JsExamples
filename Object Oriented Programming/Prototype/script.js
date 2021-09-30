let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName='Özcan';

let ece = new Person('Ece',1996,'Editor');
let lutfi = new Person('Lütfi',1994,'Software Developer');


console.log(ece.calculateAge());
console.log(ece);
console.log(ece.getName());

console.log(lutfi.calculateAge());
console.log(lutfi);
console.log(lutfi.getName());

console.log(ece.hasOwnProperty('lastName'));
console.log(ece.lastName);