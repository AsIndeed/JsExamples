let val;

function MultiplyByTwo(a,b,c,callback){
    let arr = [];

    if(callback != null && typeof callback === 'function'){
        for(let i=0; i<3; i++){
            arr[i] = callback(arguments[i]*2);
        }
    }
    return arr;
}

function addOne(a){
    return a+1;
}

function addTwo(a){
    return a+2;
}

function addThree(a){
    return a+3;
}

//val = MultiplyByTwo(5,10,20,addTwo);
val = MultiplyByTwo(5,10,20,function(a){
    return a+15;
});


//val = addOne(10);

// for(let i=0;i<val.length;i++){
//     val[i] = addOne(val[i]);
// }

console.log(val);