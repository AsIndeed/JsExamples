var products = [
    {id : 1, name : 'Samsuns S8', price : 3000},
    {id : 2, name : 'Samsuns S7', price : 2000},
    {id : 3, name : 'Samsuns S6', price : 1000}
]

let added = true;

function addProduct(prd,callback){
    if(added){
        setTimeout(()=>{
            products.push(prd);
            callback(null,prd);
        },2000)
    }else{
        callback('500',prd);
    }
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, 1000);
}

addProduct({
    id:4,
    name:'Samsung S5',
    price:500
},
function(err,data){
    if(err){
        console.log('Hata : '+err);
    }else{
        console.log(data)
    }
});

