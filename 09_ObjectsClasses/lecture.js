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
