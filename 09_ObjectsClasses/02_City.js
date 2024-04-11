function printParams(object) {

    for (const entry of Object.entries(object)) {
        const [key, value] = entry;
        console.log(`${key} -> ${value}`);
    }
}

printParams({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});