function charactersInRange(firstChar, secondChar) {

    let printString = '';

    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    if (end > start) {
        for (let i = start + 1; i < end; i++) {
            const currentChar = String.fromCharCode(i);
            printString += `${currentChar} `;
        }
    }
    return printString;
}

console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));

