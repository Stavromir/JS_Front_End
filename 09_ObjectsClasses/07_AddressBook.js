function storeAddresses(array) {

    const phoneBook = {};

    array.forEach(entry => {
        const [key, value] = entry.split(":");
        phoneBook[key] = value;
    })

    const sortedPeople = Object.entries(phoneBook).sort();

    sortedPeople.forEach(entry => {
        console.log(`${entry[0]} -> ${entry[1]} `)
    })
}


storeAddresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);