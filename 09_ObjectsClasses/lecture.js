// Създаване на празен обект
const test = {};

test.firstName = 'Stavromir';
test.lastName = 'Kasapov';

console.log(test);

test['firstName'] = 'Stavri'; // достъпване на стойност по ключ
console.log(test);

//Достъпване ключовете и стоности
console.log(Object.keys(test));
console.log(Object.values(test));
console.log(Object.entries(test)); // двойки от ключове и стойности

// JSON

// From JS to JSON

console.log(JSON.stringify(test)); // {"firstName":"Stavri","lastName":"Kasapov"} JSON object

let jsonObject = '{"firstName":"Stavri","lastName":"Kasapov"} ';

console.log(JSON.parse(jsonObject)); // { firstName: 'Stavri', lastName: 'Kasapov' } - JS object


// Classes

class Student {
    constructor(name, grade) {
        this.firstName = name;
        this.grade = grade;
    }

    //method (function)
    study() {
        this.grade++;
        console.log('Good job!')
    }
}

let firstStudent = new Student("Ivane", 3);

console.log(firstStudent);

firstStudent.study();




