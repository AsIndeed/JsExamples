// Local Storage
    let val;
    // set item
        const firstName=localStorage.setItem('firstName','Lütfi');
        const lastName=localStorage.setItem('lastName','Üstündağ');
        let hobbies = ['sinema','müzik','araba'];
    // get item
        val = localStorage.getItem('firstName');
        val = localStorage.getItem('lastName');
    // // remove item 
    //     localStorage.removeItem('firstName');
    //     localStorage.removeItem('lastName');
    // clear
        localStorage.clear();

    // set array to storage
        localStorage.setItem('hobbies',JSON.stringify(hobbies));

        val = JSON.parse(localStorage.getItem('hobbies'));


    console.log(val);
    console.log(localStorage);


// // Session Storage
    
//     const city = sessionStorage.setItem('city','İstanbul');
//     const country = sessionStorage.setItem('country','Turkey');

//     console.log(sessionStorage);