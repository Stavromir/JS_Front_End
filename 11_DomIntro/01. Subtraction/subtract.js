function subtract() {

    const firstNum = Number(document
        .getElementById('firstNumber').value);
    const secondNum = Number(document
        .getElementById('secondNumber').value);

    const subtractResult = firstNum - secondNum;

    let resultField = document.getElementById('result');

    resultField.textContent = subtractResult;
}