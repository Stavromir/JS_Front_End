function extract(id) {

    const elementText = document
        .getElementById(id).textContent;

    const pattern = /\((.+)\)/gm;

    // let reg = pattern.exec(elementText);
    //
    // console.log(reg.join("; "));

    const match = elementText.match(pattern);

    let countries = [];

    for (const current of match) {
        let country = current.substring(1, current.length - 1);
        countries.push(country);
    }

    return countries.join("; ");
}