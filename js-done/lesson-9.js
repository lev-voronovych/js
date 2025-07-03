function logItems(array) {
  console.log("Завдання 1:");
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

const items = ["Яблуко", "Банан", "Ківі"];
logItems(items);

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.trim().split(" ");
  return words.length * pricePerWord;
}

const message = "З днем народження друже";
const price = 10;
console.log("Завдання 2:");
console.log(`Ціна: ${calculateEngravingPrice(message, price)} грн`);

function findLongestWord(string) {
  const words = string.split(" ");
  let longest = words[0];
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const text = "Мій друг найкращий у всьому світі";
console.log("Завдання 3:");
console.log(`Довге слово: ${findLongestWord(text)}`);

function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + "...";
}

const shortText = "Привіт як справи";
const longText =
  "Цей текст дуже довгий і треба його трохи скоротити бо він не влазить";
console.log("Завдання 4:");
console.log(formatString(shortText));
console.log(formatString(longText));

function checkForSpam(message) {
  const msg = message.toLowerCase();
  return msg.includes("spam") || msg.includes("sale");
}

console.log("Завдання 5:");
console.log(checkForSpam("Отримай SPAM просто зараз")); // true
console.log(checkForSpam("Все добре, нічого нема")); // false

let input;
const numbers = [];
let total = 0;

console.log("Завдання 6:");

do {
  input = prompt("Введи число або натисни Скасувати");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Це не число. Введи ще раз");
    continue;
  }

  numbers.push(number);
} while (true);

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Сума чисел: ${total}`);
} else {
  console.log("Ти нічого не ввів.");
}
