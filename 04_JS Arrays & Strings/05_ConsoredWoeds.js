function solve(text, word) {

    let editedText = text;
    let newWord = "*".repeat(word.length);

    while (editedText.includes(word)) {
        editedText = editedText.replace(word, newWord);
    }

    console.log(editedText);

    // решение с regex
    const regex = new RegExp(word, 'g');
    text = text.replace(regex, newWord);
    console.log(text);
}

solve('A small sentence with some words', 'small')