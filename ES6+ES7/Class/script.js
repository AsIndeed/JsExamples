// ES5
var PersonES5 = function(name,job,yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

PersonES5.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

var lutfi = new PersonES5('Lütfi','At',1994);
console.log(lutfi.calculateAge());
console.log(lutfi);

// ES6
class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }
    calculateAge(){
        return 2021-this.yearOfBirth;
    }
}

let ece = new PersonES6('Ece','Editor',1996);
console.log(ece.calculateAge());
console.log(ece);