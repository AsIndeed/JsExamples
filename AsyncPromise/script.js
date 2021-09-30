var products = [
    {id : 1, name : 'Samsuns S8', price : 3000},
    {id : 2, name : 'Samsuns S7', price : 2000},
    {id : 3, name : 'Samsuns S6', price : 1000}
]



function addProduct(prd,callback){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            products.push(prd);
            let added = false;
            if(added){
                resolve();
            }else{
                reject('Hata : 500');
            }
        });
    });
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, 1000);
}

addProduct({id:4,name:'Samsung S5',price:500})
.then(getProducts)
.catch(function(err){
    console.log(err);
});

