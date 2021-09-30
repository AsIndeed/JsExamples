
var user = {
    name : 'Lütfi Üstündağ'
}

try {
    console.log(user.name);
    if(user.email == null){
        throw new Error('User has no email!');
    }
} catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
} finally {
    console.log('finally block');   
}

// hata varsa catch çalışır finally çalışır
// hata yoksa catch çalışmaz finally çalışır



// try {
//     console.log(myFunction());
// } catch (e) {
//     console.log(e);
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e instanceof ReferenceError);
//     console.log(e instanceof TypeError);
//     console.log(typeof e);
// }



// Reference Error
// Type Error
// Syntax Error
// URI Error

// Temel obje Error
