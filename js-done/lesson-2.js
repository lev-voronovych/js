let celsius = 25; 
let fahrenheit = (celsius * 9 / 5) + 32; 
console.log("Температура у Фаренгейтах:", fahrenheit);


let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60; 
console.log("Годин у місяці:", hoursInMonth);
console.log("Хвилин у місяці:", minutesInMonth);


let health = 100; 
let energy = 80; 
health = health - 20; 
energy = energy - 15;
console.log("Здоров'я:", health);
console.log("Енергія:", energy);


let totalPrice = 500; 
let discount = 10;
let discountedPrice = totalPrice - (totalPrice * discount / 100); 
console.log("Ціна зі знижкою:", discountedPrice);


const floatNumber = 12.78; 
let roundedDown = Math.floor(floatNumber); 
console.log("Округлене вниз число:", roundedDown);

const floatString = "45.67";
let parsedFloat = parseFloat(floatString); 
console.log("Перетворене десяткове число:", parsedFloat);


const intString = "123"; 
let parsedInt = parseInt(intString); 
console.log("Перетворене ціле число:", parsedInt);


let number = 64; 
let sqrtNumber = Math.sqrt(number); 
console.log("Квадратний корінь:", sqrtNumber);


const integer = 42; 
const stringNumber = "256"; 
let convertedInt = parseInt(stringNumber); 
let convertedString = integer.toString(); 
console.log("Перетворене в ціле число:", convertedInt);
console.log("Перетворене в рядок:", convertedString);
