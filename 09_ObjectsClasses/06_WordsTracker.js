function findOccurrences (input) {

    let wordsCount = {};

    let words = input.shift().split(" ");
    
    words.forEach(word => wordsCount[word] = 0);

    for (let i = 1; i < input.length; i++) {
        let isPresent = Object.keys(wordsCount).find(key => key === input[i]);

        if (isPresent) {
            wordsCount[isPresent] += 1;
        }
    }

    Object.entries(wordsCount).sort((a, b) => b[1] - a[1])
        .forEach(entry => {
        console.log(`${entry[0]} - ${entry[1]}`);
    })
}

findOccurrences(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

findOccurrences(['is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);