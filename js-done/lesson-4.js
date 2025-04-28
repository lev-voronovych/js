let text1 = "Hello";
let text2 = "World";
console.log(text1 && text2 ? "Обидва поля заповнені" : "Не всі поля заповнені");

let num1 = 5;
let num2 = 7;
let sumNums = num1 + num2;
console.log(sumNums > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10");

let text = "Я вивчаю JavaScript і Python.";
console.log(text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript");

let number = 15;
console.log(number > 10 && number < 20 ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20");

let name = "Lev";
let email = "lev@example.com";
let password = "mypassword";

console.log(
  name.length >= 3 && 
  email.includes("@") && 
  email.split("@")[1].includes(".") && 
  password.length >= 6
    ? "Перенаправлення на іншу сторінку"
    : "Помилка: неправильне заповнення"
);
