
let text1 = "Hello";
let text2 = "World";
if (text1 && text2) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}


let num1 = 5;
let num2 = 7;
let sumNums = num1 + num2;
if (sumNums > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

let text = "Я вивчаю JavaScript і Python.";
if (text.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}


let number = 15;
if (number > 10 && number < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}

let name = "Lev";
let email = "lev@example.com";
let password = "mypassword";

if (name.length >= 3 && email.includes("@") && email.split("@")[1].includes(".") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}
