var welcome = function (a,b){
    console.log('Welcome '+this.name+'. Are you interested in '+a+' and '+b);
}

var lutfi = {name : 'Lütfi'};
var ece = {name : 'Ece'};

welcome.call(lutfi,'asp.net','angular');
welcome.call(ece,'asp.net','angular');

welcome.apply(lutfi,['asp.net','angular']);
welcome.apply(ece,['asp.net','angular']);

welcomeLutfi = welcome.bind(lutfi);
welcomeLutfi('asp.net','angular');

welcomeEce = welcome.bind(ece);
welcomeEce('asp.net','angular');

