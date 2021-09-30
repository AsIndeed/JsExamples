const input = document.getElementById('calculator-input');
keys = document.querySelector('.calculator-keys');

let firstVal = null;
let secondVal = null;
let isItFirstVal = true;
dogumuSamed = true;
let displayValue = '0';
let cacheOperator = null;

updateDisplay(displayValue);

keys.addEventListener('click',function(e){
    const element = e.target;
    const elementValue = element.value;
    
    if(element.classList.contains('b')){
        switch(elementValue){
            case '+':
                handleOperator(elementValue);
                break;
            case '-':
                handleOperator(elementValue);
                break;
            case '*':
                handleOperator(elementValue);
                break;
            case '/':
                handleOperator(elementValue);
                break;
            case '=':
                handleOperator(elementValue);
                break;
            case '.':
                handleDecimal();
                break;
            case 'clear':
                clear();
                break;
            default:
                addingNumber(elementValue);
                
                break;
        }
    }
});


function addingNumber(elementValue){
    if(isItFirstVal){
        if(displayValue == 0){
            if(!displayValue.includes('.')){
                displayValue = elementValue;
            }else{
                displayValue += elementValue;
            }
        }else{
            displayValue += elementValue;
        }
        updateDisplay();
    }else{
        displayValue = '0';
        if(displayValue == 0){
            if(!displayValue.includes('.')){
                displayValue = elementValue;
            }else{
                displayValue += elementValue;
            }
        }else{
            displayValue += elementValue;
        }
        isItFirstVal=true;
        updateDisplay();
    }
    
}

function handleDecimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
        updateDisplay();
    }
}

function handleOperator(operator){
    if(dogumuSamed){
        if(operator!='='){
            firstVal = parseFloat(displayValue);
            cacheOperator = operator;
            isItFirstVal = false;
            dogumuSamed = false;
        }
    }else{
        
        secondVal = parseFloat(displayValue);
        switch(cacheOperator){
            case '+':
                displayValue = firstVal + secondVal;
                break;
            case '-':
                displayValue = firstVal - secondVal;
                break;
            case '*':
                displayValue = firstVal * secondVal;
                break;
            case '/':
                displayValue = firstVal / secondVal;
                break;
        }
        firstValue = displayValue;
        isItFirstVal = false;
        
    }
    updateDisplay();
}

function clear(){
    displayValue = '0';
    updateDisplay();
}

function updateDisplay(){
    input.value = displayValue;
}