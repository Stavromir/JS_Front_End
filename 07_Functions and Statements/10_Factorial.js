function factorialDivision(num1, num2) {

    function calculateFactorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * calculateFactorial(num - 1);
    }


    const firstNumFact = calculateFactorial(num1);
    const secondNumFact = calculateFactorial(num2);

    console.log(firstNumFact / secondNumFact);
}

factorialDivision(5, 2);