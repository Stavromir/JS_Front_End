function convertToJson() {
    const [name, lastName, hairColor]  = arguments;

    let object = {
        name,
        lastName,
        hairColor
    }
    return JSON.stringify(object);
}

console.log(convertToJson('George', 'Jones', 'Brown'));