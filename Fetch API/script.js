// text
function getText(){
    fetch('text.txt')
        .then(response => {
            return response.text();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
}
//getText();


// json
function getJson(){
    fetch('products.json')
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
}
//getJson();

//external api
function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
        .then(data => {
            return data.json()
        }).then(users => {
            var html="";
            users.results.forEach(user => {
                console.log(user);
                html += `
                    <div>
                        <img src="${user.picture.medium}">
                        <div>
                            ${user.name.first} 
                            ${user.name.last}
                        </div>
                    </div>
                `
            });
            document.querySelector('#users').innerHTML = html;
        }).catch(error => {
            console.log(error);
        })
}
//getExternalApi();

function postExternalApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    var data = {
        method : "POST",
        body : JSON.stringify({
            userId : 1,
            title : 'sample title',
            body : 'sample data'
        }),
        header : new Headers({
            'content-type':'application/json'
        })
    }
    fetch(url,data)
        .then(res => {
            console.log(res);
            console.log(JSON.parse(data.body).title);
        });
}

postExternalApi();