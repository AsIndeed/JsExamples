function Question(hobby){

    switch(hobby){
        case 'car':
            return function(name){
                console.log(name+ ', do you have a car?');
            }
        break;

        case 'book':
            return function(name){
                console.log(name+ ', what is your favorite book?');
            }
        break;

        case 'software':
            return function(name,type){
                console.log(name+ ', are you interested in '+type+'?');
            }
        break;

        default:
            return function(name){
                console.log(name+ ', how are you?');
            }
    }
}

var carQuestion = Question('car');

carQuestion('Lütfi');
carQuestion('Ece');

var bookQuestion = Question('book');

bookQuestion('Nihat');
bookQuestion('Naciye');

var softwareQuestion = Question('software');

softwareQuestion('Lütfi','Javascript');
softwareQuestion('Özgür','Wordpress');