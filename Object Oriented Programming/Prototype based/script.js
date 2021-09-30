let Person = function (name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject = subject;
}

// Inherit işlemi

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    return 'Hello my name is '+this.name;
}


let ece = new Teacher('Ece',1996,'Teacher','Math');
console.log(Teacher.prototype.constructor);

console.log(ece);
console.log(ece.calculateAge());