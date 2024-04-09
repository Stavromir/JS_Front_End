function solve(text, word) {

    let elementArr = text.split(/ +/g).filter(element => String(element) === word);
    console.log(elementArr.length);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');