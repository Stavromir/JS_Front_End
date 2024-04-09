function solve(wordsArr, text) {
    let words = wordsArr.split(", ");
    let textWords = text.split(/ +/g);

    for (const word of words) {
        let wordTemplate = "*".repeat(word.length);

        for (let i = 0; i < textWords.length; i++) {

            if (textWords[i] === wordTemplate) {
                textWords[i] = word;
            }
        }
    }
    console.log(textWords.join(" "));
}

solve ('great, learning', 'softuni is ***** place for ******** new programming languages');