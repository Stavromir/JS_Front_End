function validatePassword(password) {

    function isInLengthRange(password) {
        let passLength = password.length;
        return passLength >= 6 && passLength <= 10;
    }

    function isOnlyFromLettersAndDigits(password) {
        let match = password.match(/^[(a-z)(A-Z)(\d)]+$/gm);

        if (match !== null && match.length === 1) {
            return true;
        }
    }

    function haveAtLeastTwoDigits(password) {
        let matches = password.match(/[\d]/gm);
        if (matches !== null && matches.length >= 2) {
            return true;
        }
    }

    if (!isInLengthRange(password)) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOnlyFromLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!haveAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');