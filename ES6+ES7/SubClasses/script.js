// ES5
function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

function CustomerES5(firstName,lastName,phone,userName){
    PersonES5.call(this,firstName,lastName);
    this.phone = phone;
    this.userName = userName;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);

var customer = new CustomerES5('General','Kenobi','5555555555','rubikaks');

console.log(customer.sayHi());
console.log(customer);


// ES6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,userName){
        super(firstName,lastName);
        this.phone = phone;
        this.userName = userName;
    }
    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('General','Kenobi','9999999999','generalkenobi');
console.log(customer1.sayHi());
console.log(customer1); // yapıları bire bir aynı
console.log(CustomerES6.getTotal());