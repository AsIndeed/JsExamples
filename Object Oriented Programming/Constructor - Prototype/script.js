let Employee = function(name,salary){
    if (!(this instanceof Employee)) {
        return new Employee(name,salary)
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function() {
    var month = new Date().getMonth()+1;
    var tax = 0;
    var total = this.salary*month;
    
    if(total <= 20000){
        tax = total*0.2;
    }
    else if(total > 20000 && total <= 30000){
        tax = total*0.25
    }else{
        tax = total*0.3;
    }

    return{
        tax : tax,
        paid : total - tax
    }
}

var emp1 = Employee('Lütfi', 4000);
var emp1_salary = emp1.calculateSalary();


var emp2 = new Employee('Ece', 4300);
var emp2_salary = emp2.calculateSalary();

console.log(`${emp1.name} bu yıl toplam ${emp1_salary.paid} TL maaş almış, ${emp1_salary.tax} TL vergi ödemiştir.`);
console.log(`${emp2.name} bu yıl toplam ${emp2_salary.paid} TL maaş almış, ${emp2_salary.tax} TL vergi ödemiştir.`);