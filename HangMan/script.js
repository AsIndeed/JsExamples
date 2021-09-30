const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const warning = document.getElementById('warningDiv');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const button = document.getElementById('play-again');
const warningDiv = document.getElementById('message');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord(){
    const words = ["java","python","csharp","html"]

    return words[Math.floor(Math.random() * words.length)]
}

function displayWord(){
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">${correctLetters.includes(letter) ? letter : ''}</div>
        `).join('')}
    `;
    const w = word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Congratulations. You Won!'
    }
}

function updateWrongLetter(){
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3>Wrong Letters : </h3>':''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;

    items.forEach((item,index)=>{
        const errorCount = wrongLetters.length;
        if(index<errorCount){
            console.log('blockladı');
            console.log(item);
            item.style.display = 'block';
        }
        else{
            console.log('noneladı');
            item.style.display = 'none';
        }
    })
    if(wrongLetters.length === items.length){
        popup.style.display = 'flex';
        message_el.innerText = 'Sorry, You Lost..'
    }

}

function reload(){
    location.reload(true);
}

function displayMessage(){
    warningDiv.classList.add('showWarningDiv');

    setTimeout(function(){
        warningDiv.classList.remove('showWarningDiv');
    }, 2000)
}

window.addEventListener('keydown',function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                displayMessage();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetter();
            }else{
                displayMessage();
            }
        }
    }
});

displayWord();