function solve (count, typeOfGroup, dayOfWeek) {
    let price;

    if (typeOfGroup === "Students") {
        let discount = 1;
        if (count >= 30) {
            discount = 0.85;
        }

        if (dayOfWeek === "Friday"){
            price = count * 8.45 * discount;
        } else if (dayOfWeek === "Saturday") {
            price = count * 9.80 * discount;
        } else if (dayOfWeek === "Sunday") {
            price = count * 10.46 * discount;
        }

    } else if (typeOfGroup === "Business") {
        let newPeopleCount = count;

        if (count >= 100) {
            newPeopleCount = count - 10;
        }

        if (dayOfWeek === "Friday"){
            price = newPeopleCount * 10.90;
        } else if (dayOfWeek === "Saturday") {
            price = newPeopleCount * 15.60;
        } else if (dayOfWeek === "Sunday") {
            price = newPeopleCount * 16;
        }

    } else if (typeOfGroup === "Regular") {
        let discount = 1;
        if (count >= 10 && count <=20) {
            discount = 0.95;
        }

        if (dayOfWeek === "Friday"){
            price = count * 15 * discount;
        } else if (dayOfWeek === "Saturday") {
            price = count * 20 * discount;
        } else if (dayOfWeek === "Sunday") {
            price = count * 22.50 * discount;
        }
    }

    console.log(price.toFixed(2));
}

solve(30,
    "Students",
    "Sunday");

solve(40,
    "Regular",
    "Saturday");