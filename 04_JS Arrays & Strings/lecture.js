// Rest Operator / Деструктуриране на масив

let numbers = [10, 20, 30, 40, 50, 60];
let [a, b, ...elems] = numbers;

console.log(a);
console.log(b);
console.log(elems);


for (let aElement of numbers) {

}

// Methods
let arrayTwo = [10, 20, 30, 40, 50, 60];
console.log(arrayTwo);
// pop();
let v = arrayTwo.pop(); //60 -> премахва последния елемент [10,20,30,40,50]
console.log(v);
console.log(arrayTwo);
// push();
console.log(arrayTwo.push(20)); // връща дължината на масива
console.log(arrayTwo.push(20, 154, 214)); // връща дължината на масива
// shift()
let t = arrayTwo.shift(); // премахва първият елемент от масива и го връша като резултат
// unshift()
arrayTwo.unshift(30) // добавя елемент в началото на масива
//splice()
let arrayThree = [1, 2, 3, 4, 5, 6];
arrayThree.splice(2, 0, 8); // [1,2,8,3,4,5,6]
console.log(arrayThree);
arrayThree.splice(2, 1, 9);
console.log(arrayThree); // [1,2,8,3,4,5,6]
// ...arguments
function func1(...arguments) {
    console.log(arguments);
    console.log(arguments.length);
}

function func2() {
    console.log(arguments);
    console.log(arguments.length);
}

func1(1, 2, 3, 4);
func2(1, 2, 3, 4);

// reverse()
let arrayFour = [1, 2, 3, 4, 5, 6];
console.log(arrayFour.reverse());

//join()
const arrayFive = ["Fire", "Air", "Water"];
console.log(arrayFive.join(""));
console.log(arrayFive.join(" "));
console.log(arrayFive.join("\n"));

//slice()
// връща новосъздаден масив !!!
const arraySix = ["Fire", "Air", "Water", "Earth", "Test"];
let sliceOne = arraySix.slice();
console.log(sliceOne);
let sliceTwo = arraySix.slice(1);
console.log(sliceTwo);
let sliceThree = arraySix.slice(1, 4);
console.log(sliceThree);

// includes - търсене в масив

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.includes("a"));
console.log(arr.includes("e", 2));

// index.of()

console.log(arr.indexOf("b")); // връща индекса на елемента
console.log(arr.indexOf("h")); // връща -1 ако няма намерен елемент

//foreach() - клониране на масив
let newArr = [];
arr.forEach(element =>
    newArr.push(element));

// Map

let arraySeven = [1, 2, 3, 2, 1, 2];

let newArrSeven = arraySeven.map(index => index = "*");
console.log(newArrSeven);

// Find - връща първия елемент отговарящ на условието
let r = arraySeven.find((num) => num > 2);
let p = arraySeven.find((num) => num > 3); //undefined
console.log(r);
console.log(p);

// Find - връща всички елементи отговарящи на условието
let j = arraySeven.filter((num) => num > 1); // new []
let k = arraySeven.filter((num) => num > 3); // empty []
console.log(j);
console.log(k);

//Manipulating Strings
//Concatenating

// index.of() // lastIndexOf()
let str = "I am JavaScript developer";
console.log(str.indexOf("Java")); // 5
console.log(str.indexOf("java")); // -1
console.log(str.lastIndexOf("e")); // 23

// substring()
console.log(str.substring(5, 9)); // Java

// replace()
let emails = "abv@email.com vba@email.com";
console.log(emails.replace(".com", ".bg"));// заменя само първата открита част

// split()
let fruits = "I love fruits";
let words = fruits.split(' ');
console.log(words);

// includes()
console.log(fruits.includes("love")); // true
console.log(fruits.includes("no")); // false

// repeat()

console.log('*'.repeat(10));

// trim(); // trimStart() // trimEnd()
let trim = "      I am the Rock    ";
console.log(trim.trim());

// startsWith() / endsWith()
let start = "I em the Rock";
console.log(start.startsWith("I"));
console.log(start.endsWith("y"));

// padStart() / padEnd()
let pad = "010";
console.log(pad.padStart(8, "0")); // 00000010
console.log(pad.padEnd(8, "0")); // 01000000

// RegExp - реглярни изрази
const regLiteral = /[A-Za-z]+/g
const regExp = new RegExp('[A-Za-z]+', 'g');







