function solve(textToProcess) {

    let regex = /#[A-Za-z]+/gm;

    let match = textToProcess.match(regex);

    for (let element of match) {
        console.log(element.replace("#", ""));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');