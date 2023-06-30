const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult, calcDescription)
}

function add(num1, num2) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber; // numA + + stringB == parseInt(stringB)
    createAndWriteOutput('+',initialResult,enteredNumber)

}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber)
}
function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber)
}
function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


