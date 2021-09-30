var str1 = 'Lütfi'; //STRING
var str2 = new String('Lütfi'); //OBJE

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if(str1 === 'Lütfi'){
    console.log('yes');
}else{
    console.log('no');
}

if(str2 === 'Lütfi'){
    console.log('yes');
}else{
    console.log('no');
}

String.prototype.repeat = function (n) {
    return new Array(n+1).join(this);
}

console.log('Lütfi'.repeat(4));


var num1 = 10;
var num2 = new Number(10);

var bool1 = true;
var bool2 = new Boolean(true);

var obj1 = {
    name: 'Lütfi'
}
var obj2 = new Object({
    name : 'Lütfi'
})



var arr1 = ['lütfi','ece','nihat','berke'];
var arr2 = new Array('lütfi','ece','nihat','berke');

Array.prototype.remove = function (member) {  
    var index = this.indexOf(member);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}
console.log(arr1.remove('ece'));
