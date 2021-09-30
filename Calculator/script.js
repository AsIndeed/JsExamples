const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

UpdateDisplay();

function UpdateDisplay(){
    display.value = displayValue;
}



keys.addEventListener('click',function(e){
    const element = e.target;
    const value = element.value;

    if(!element.matches('button')) return;

    switch(element.value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'clear':
            clear();
            break;
        default:
            inputNumber(element.value);
    }
    UpdateDisplay();
});

function inputNumber(number){
    if(waitingForSecondValue){
        displayValue = number;
        waitingForSecondValue = false;
    }else{
        if(displayValue == '0' && number == '0') return;
        if(displayValue == '0'){
            displayValue = number;
        }else{
            displayValue += number;
        }
    }
}

function inputDecimal(value){
    if(displayValue.includes('.')){
        return;
    }
    displayValue += value;
}

function clear(){
    displayValue = '0';
}

function handleOperator(nextOperator){
    const value = parseFloat(displayValue);
    if(operator && waitingForSecondValue){
        operator = nextOperator;
        return;
    }
    if(firstValue == null){
        firstValue = value;
    }else if(operator){
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(10))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

function calculate(first, second, operator){
    if(operator == '+'){
        return first + second;
    }else if( operator == '-'){
        return first - second;
    }else if(operator == '*'){
        return first * second;
    }else if(operator == '/'){
        return first / second;
    }
    return second;
}
