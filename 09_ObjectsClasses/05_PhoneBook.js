function storePhoneNumbers(array) {
    let phoneBook = {};

    for (const entry of array) {
        const [key, value] = entry.split(" ");

        phoneBook[key] = value;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

storePhoneNumbers(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);