function solve() {

    const inputText = document
        .getElementById('text').value.toLowerCase();
    const conventionType = document
        .getElementById('naming-convention').value;

    let wordsInText = inputText.split(" ");

    let result = "";

    if (conventionType === 'Camel Case') {

        for (let i = 0; i < wordsInText.length; i++) {

            let currentWord = wordsInText[i];

            if (i > 0) {
                let firstLetter = currentWord.substring(0, 1);
                console.log(firstLetter);
                currentWord = currentWord.replace(firstLetter, firstLetter.toUpperCase());
            }
            result += currentWord;
        }

    } else if (conventionType === 'Pascal Case') {

        for (let i = 0; i < wordsInText.length; i++) {

            let currentWord = wordsInText[i];

            let firstLetter = currentWord.substring(0, 1);
            currentWord = currentWord.replace(firstLetter, firstLetter.toUpperCase());
            result += currentWord;
        }

    } else {
        result = 'Error!'
    }

    document.getElementById('result').textContent = result;
}