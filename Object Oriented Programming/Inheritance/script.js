// Person constructor

function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function () {
    console.log('Hello my name is '+this.name);
}

// Teacher constructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
    console.log('I teach '+this.branch);
}

// Student constructor
function Student(name,number){
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
    console.log('My school number is '+this.number);
}

// HeadMaster constructor
function HeadMaster(name,branch){
    Teacher.call(this,name,branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;
HeadMaster.prototype.shareTasks = function () {
    console.log('Tasks shared!');
}






let p1 = new Person('Lütfi');
p1.Introduce();

let t1 = new Teacher('Ece','Edebiyat');
t1.Introduce();
t1.teach();

let s1 = new Student('Nihat','3339');
s1.Introduce();
s1.study();

let h1 = new HeadMaster('Naciye','Math');
h1.Introduce();
h1.teach();
h1.shareTasks();
