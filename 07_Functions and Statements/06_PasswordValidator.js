function validatePassword(password) {

    let isValid = true;

    function isInLengthRange(password) {
        let passLength = password.length;
        return passLength >= 6 && passLength <= 10;
    }

    function isOnlyFromLettersAndDigits(password) {
        const regex = /^[(a-z)(A-Z)(\d)]+$/gm;
        // let match = password.match(regex);
        let validation = regex.test(password);

        if (validation) return true;
    }

    function haveAtLeastTwoDigits(password) {
        let matches = password.match(/[\d]/gm);
        if (matches !== null && matches.length >= 2) {
            return true;
        }
    }

    if (!isInLengthRange(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOnlyFromLettersAndDigits(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }
    if (!haveAtLeastTwoDigits(password)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }


}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');