function manageMeetings(array) {

    let calendarManager = {};

    for (const entry of array) {
        const [key, value] = entry.split(" ");

        if (calendarManager.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}`);
        } else {
            calendarManager[key] = value;
            console.log(`Scheduled for ${key}`);
        }
    }

    Object.keys(calendarManager).forEach(key => console.log(`${key} -> ${calendarManager[key]}`));
}

manageMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);