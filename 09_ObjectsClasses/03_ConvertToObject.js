function convertToObject(jsonString) {

    const object = JSON.parse(jsonString);

    Object.entries(object).forEach((entry) => {
        console.log(`${entry[0]}: ${entry[1]}`);
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');