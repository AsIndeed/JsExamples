let personProto = {
    calculateAge : function () {
        return 2021-this.yearOfBirth;
    }
}

let lutfi = Object.create(personProto);

lutfi.name = 'Lütfi';
lutfi.yearOfBirth = 1994;
lutfi.job = 'At';

let ece = Object.create(personProto,{
    name : {value : 'ece'},
    yearOfBirth : {value : 1996},
    job : {value : 'at2'}
});

console.log(ece);
console.log(ece.calculateAge());

console.log(lutfi);
console.log(lutfi.calculateAge());