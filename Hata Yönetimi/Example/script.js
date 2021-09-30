document.getElementById('myBtn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = ''
    try{
        if (name.value.length === 0) {
            throw new Error('Name is required!');
        }
        if (name.value.length > 20) {
            throw new Error('Name should be shorter than 20 characters!');
        }
        if (age.value.length === 0) {
            throw new Error('Age is required!');
        }
        if (isNaN(age.value)) {
            throw new Error('Age is not numeric!');
        }
        console.log('Form is submitted.')
    } catch (err){
        errors.innerHTML = err.message;
    } finally {
        name.value = '';
        age.value = '';
    }

    e.preventDefault();
});