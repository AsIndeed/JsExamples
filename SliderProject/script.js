var modals = [
    {
        name:'Bmw 418d',
        image:'img/bmw.jpg',
        link:'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-grand-coupe'
    },
    {
        name:'Mazda CX-3',
        image:'img/mazda.jpg',
        link:'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name:'Volvo S60',
        image:'img/volvo.jpg',
        link:'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name:'Skoda Superb',
        image:'img/skoda.jpg',
        link:'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name:'Honda Civic',
        image:'img/honda.jpg',
        link:'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    },
]

var index = 0;
var slideCount = modals.length;
var settings = {
    duration : '1000',
    random : false,
};
var interval;

showSlide(index);
init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    console.log(index);
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    console.log(index);
    showSlide(index);
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
})

function init(settings){

    var previous;
    interval = setInterval(function(){
        if (settings.random) { 
            do{
                index = Math.floor(Math.random() * slideCount);          
            }while(index==previous)
            previous = index;
        }else{
            if (slideCount == index+1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration);
}

function showSlide(i){
    index = i;
    if (i<0) {
        index = slideCount -1;
    }
    if(i >= slideCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent=(modals[index].name);
    document.querySelector('.card-img-top').setAttribute('src',modals[index].image);
    document.querySelector('.card-link').setAttribute('href',modals[index].link);
}