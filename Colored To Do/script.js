$(document).ready(function(){
    document.getElementById('lastDate').value = currentDate();
});

class Thing{
    constructor(title,description,date,color){
        this.thingId = Math.floor(Math.random()*1000000);
        this.title = title;
        this.description = description;
        this.date = date;
        this.color = color;
    }
}

class UI{
    addThingToList(thing){
        const list = document.getElementById('task-list');
        
        //Setting background-color and color
        let bgColor;
        let textColor;
        let presentDay = new Date();
        presentDay = Date.now();
        let lastDateif = Date.parse(thing.date);
        let dateDiff = ((lastDateif-presentDay)/86400000)+1;
        

        if(dateDiff>=0){
            textColor = 'black';
            if(dateDiff > 1){
                if(thing.color === 'green'){
                    bgColor = '#7AD47D';
                }else if(thing.color === 'yellow'){
                    bgColor = '#FFF098';
                }else if(thing.color === 'blue'){
                    bgColor = '#95BAF7';
                }
            }else{
                bgColor = '#de6570';
            }
        }else{
            bgColor = 'black';
            textColor = 'white';
        }   
        

        var html = `
            <div class="card mb-3">
                <div class="card-header">
                    ${thing.title}
                    <a href="#" id="btnDelete" class="delete-item float-right delete"><i data-id="${thing.thingId}" class="fas fa-times"></i></a>
                </div>
                <div class="card-body" style="background-color:${bgColor}; color:${textColor};">
                    <p style="text-indent: 40px; text-align: justify;">${thing.description}<p>
                </div>
                <div class="card-footer">
                    <div class="float-right">
                        ${thing.date}
                    </div>
                </div>
            </div>
        `;
        list.innerHTML += html;
    }

    clearControls(){
        const title = document.getElementById('toDoTitle').value = '';
        const description = document.getElementById('toDoDescription').value = '';
        const date = document.getElementById('lastDate').value= currentDate();  
    }

    thingDelete(element){
        if(element.classList.contains('fas')){
            if(confirm('Silmek istediğinizden emin misiniz?')){
            element.parentElement.parentElement.parentElement.remove();
            this.showAlert('Silme işlemi başarıyla gerçekleşti.','danger');
            }
        }
    }

    showAlert(message,className){
        var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
        `;
        const row = document.querySelector('#firstCardBody');
        // beforeBegin, afterBegin, beforeEnd, afterEnd
        row.insertAdjacentHTML('beforeBegin',alert);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteAllThings(){
        const list = document.getElementById('task-list');
        if(list.innerHTML.indexOf("card") != -1){
            if(confirm('Tüm işleri silmek istediğinizden emin misiniz?')){
                while(list.firstChild){
                    list.removeChild(list.firstChild);
                }
                this.showAlert('Silme işlemi başarıyla gerçekleşti.','danger');
            }
        }
    }
}

class Storage{
    static getThings(){
        let things;
        if(localStorage.getItem('things')===null){
            things = [];
        }else{
            things = JSON.parse(localStorage.getItem('things')); 
        }
        return things;
    }

    static displayCourse(){
        const things = Storage.getThings();
        things.forEach(thing => {
            const ui = new UI();
            ui.addThingToList(thing);
        });
    }

    static addThing(thing){
        const things = Storage.getThings();
        things.push(thing);
        localStorage.setItem('things',JSON.stringify(things));
    }

    static deleteThing(element){
        if(element.classList.contains('fas')){
            const id = element.getAttribute('data-id');
            const things = Storage.getThings();

            things.forEach((thing,index)=>{
                if(thing.thingId == id){
                    things.splice(index,1);
                }
            });
            localStorage.setItem('things',JSON.stringify(things));
        };
    }
}

document.addEventListener('DOMContentLoaded',Storage.displayCourse);

document.getElementById('new-thing').addEventListener('submit',function(e){
    const title = document.getElementById('toDoTitle').value;
    const description = document.getElementById('toDoDescription').value;
    const date = document.getElementById('lastDate').value;
    const color = document.getElementById('colorpicker').value;

    const thing = new Thing(title,description,date,color);
    

    const ui = new UI();

    if(title === '' || title === null){
        ui.showAlert('Lütfen yapılacak iş giriniz!','warning')
    }else if(description === '' || description === null){
        ui.showAlert('Lütfen açıklama giriniz!','warning')
    }else if(date === '' || date === null){
        ui.showAlert('Lütfen bitiş tarihi giriniz!','warning')
    }else{
        ui.addThingToList(thing);
        ui.clearControls();
        Storage.addThing(thing);
        ui.showAlert('Ekleme işlemi gerçekleşti.','success');
    }
    e.preventDefault();
});

document.getElementById('task-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.thingDelete(e.target);

    Storage.deleteThing(e.target);

    e.preventDefault();
});

document.getElementById('btnDeleteAll').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteAllThings(e.target);

    localStorage.clear();

    e.preventDefault();
})

function currentDate(){
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return today;
}



    





