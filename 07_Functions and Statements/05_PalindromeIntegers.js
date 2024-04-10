function palindromeIntegers(arr) {

    for (const number of arr) {
        console.log(isPalindrome(number))
    }

    function isPalindrome(num) {

        let numAsString = num.toString();
        let reversedNum = numAsString.split('').reverse().join('');

        return numAsString === reversedNum;

        // const numLength = numAsString.length;
        // for (let i = 0; i < Math.floor(numLength / 2); i++) {
        //     if (numAsString[i] !== numAsString[numLength - i - 1]) {
        //         return false;
        //     }
        // }
        // return true;
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);

