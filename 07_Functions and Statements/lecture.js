// Деклариране на функция
let printText = function (text) {
    console.log(text);
};
[1, 2, 3, 4, 5].map(num => printText(num));
[1, 2, 3, 4, 5].map(printText);

// RETURN - Указваме какво пръща финкцията, в противен случай връща undefined!
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("Jon", "Bonbob"));

