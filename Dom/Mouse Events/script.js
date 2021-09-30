const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// btn.addEventListener('dblclick',eventHandler);

// btn.addEventListener('mousedown',eventHandler);
// btn.addEventListener('mouseup',eventHandler);

// ul.addEventListener('mouseenter',eventHandler);
// ul.addEventListener('mouseleave',eventHandler);

// ul.addEventListener('mouseover',eventHandler);
// ul.addEventListener('mouseout',eventHandler);

const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);


function eventHandler(event){
    console.log(`event type : ${event.type}`);
    h5.textContent=`Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`
}