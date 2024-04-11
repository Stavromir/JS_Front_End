function employeesList(array) {

    let employees = {};

    for (const entry of array) {
        employees[entry] = entry.length;
    }

    Object.keys(employees).forEach(key => {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    })
}

employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);