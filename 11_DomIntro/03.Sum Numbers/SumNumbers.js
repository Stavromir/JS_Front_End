function calc() {
    const firstNumberReference = document.getElementById('num1');
    const firstNumberAsValue = firstNumberReference.value;
    const firstNumberAsNumber = Number(firstNumberAsValue);

    const secondNumber = Number(document.getElementById('num2').value);

    const sum = firstNumberAsNumber + secondNumber;

    document.getElementById('sum').value = sum;


 }
