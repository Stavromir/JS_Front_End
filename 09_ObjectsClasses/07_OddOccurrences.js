function extractElements(input) {

    let map = new Map();

    input.toLowerCase().split(" ").forEach(el => {

        if (map.has(el)) {
            let oldValue = map.get(el);
            let newValue = oldValue + 1;
            map.set(el, newValue);
        } else {
            map.set(el, 1);
        }
    });

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            console.log(`${key }`);
        }
    })
}

extractElements('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');