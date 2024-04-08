function solve(name, grade) {
    console.log(`The name is: ${name}, grade is: ${grade}`);
}

solve("Petur", 3.5555);

// Закръгляне до знак

let a = 2.44444444;
console.log(a.toFixed(2));

// Създаване на обект

let g = {
    name: "Ivan",
    age: 12,
    dateOfBirth: new Date(),
};

console.log(g);

// Създаване на масив

let i = [1, 2, 3];
let l = ["abv", "bva", "hgd"];

//Променливи / Block Scope

let t = [1, 2, 3]; //Block scope - mutable - отменим (може да се променя след девинирането, може да се предефинира към друг тип данни)
const h = 3.232; //Block scope - immutable - неотменим (не може да променяме повече стойността и)

if(true) {
    const w = 3; // Block scope - конст. w е дефинирана само в "block scope" (къдравите скоби {})!!!
    console.log(w);
}

if(true) {
    let w = 3; // Block scope - конст. w е дефинирана само в "block scope" (къдравите скоби {})!!!
    console.log(w);
}

if(true) {
    var w = 3; // Var doesn`t have block scope but have Function Scope - конст. w е дефинирана и може да бъде достъпена извън къдравите скоби
    console.log(w);
}

// Function scope

function myFunction() {
    var l = "go go go"; // l не може да бъде достъпена извън скоупа на функцията
    console.log(l);
}

// Global scope - могат да бъдат достъпени във всеки scope

let u = 231;
const o = 33344;
var p = 929292;

//Comparison Operators

console.log(1 == "1"); //true - сравнява по стойност, oпитва се единия тип да го приравни към другия typecast, след което сравнява
console.log(1 === "1"); //falce - сравнява и по тип и по стойност

console.log(1 != "1"); // различие по стойност
console.log(1 !== "1"); // различие по стойност и по тип

//Ternary operator 

const isValid = true;
console.log(isValid ? "Is Valid!" : "Is not valid");

// Type of variables

const j = "ffff";
console.log(typeof(j));

//Truthy and Falsy Values

const bool = false; //falsy
const notDefined = undefined; //falsy
const nullVariable = null; // falsy
const notANumber = NaN; //falsy
const zero = 0; // falsy
const emptyString = ""; //falsy
const emptyArray = []; //falsy

function logTruthinness (val) {
    if(val) {
        console.log("It`s truthy");
    } else {
        console.log("It`s falsy");
    }
}

logTruthinness(bool);
logTruthinness(13);

//Loop 

for (let i = 0; i < 10; i++) {
    console.log(i);
}






