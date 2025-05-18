
let drink = "Кава"; 
switch (drink) {
  case "Кава":
    console.log("Ви вибрали каву");
    break;
  case "Чай":
    console.log("Ви вибрали чай");
    break;
  case "Сік":
    console.log("Ви вибрали сік");
    break;
  default:
    console.log("Невідомий вибір");
}


let day = "Понеділок";
switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П’ятниця":
    console.log("Робочий день");
    break;
  case "Субота":
  case "Неділя":
    console.log("Вихідний день");
    break;
  default:
    console.log("Невірний день");
}


let month = 4; 
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невірний номер місяця");
}


let color = "червоний";
switch (color) {
  case "червоний":
    console.log("стоп");
    break;
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  default:
    console.log("невідомий колір");
}


let a = 10;
let b = 0;
let operator = "/"; 
switch (operator) {
  case "+":
    console.log(`Результат: ${a + b}`);
    break;
  case "-":
    console.log(`Результат: ${a - b}`);
    break;
  case "*":
    console.log(`Результат: ${a * b}`);
    break;
  case "/":
    if (b !== 0) {
      console.log(`Результат: ${a / b}`);
    } else {
      console.log("Помилка: ділення на нуль");
    }
    break;
  default:
    console.log("Невідомий оператор");
}
