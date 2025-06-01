
const bankAccount = {
  ownerName: "Іван",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit() {
    const confirmDeposit = confirm("Хочеш поповнити рахунок?");
    if (confirmDeposit) {
      const amount = Number(prompt("Введи суму для поповнення:"));
      if (!isNaN(amount) && amount > 0) {
        this.balance += amount;
        alert(`Гроші додано. Залишок: ${this.balance} грн`);
      } else {
        alert("Сума некоректна.");
      }
    }
  },

  withdraw() {
    const confirmWithdraw = confirm("Хочеш зняти гроші з рахунку?");
    if (confirmWithdraw) {
      const amount = Number(prompt("Введи суму для зняття:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        alert(`Гроші знято. Залишок: ${this.balance} грн`);
      } else {
        alert("Сума некоректна або недостатньо грошей.");
      }
    }
  },
};


bankAccount.deposit();
bankAccount.withdraw();


const weather = {
  temperature: null,
  humidity: 60,
  windSpeed: 10,

  isFreezing() {
    return this.temperature < 0;
  },
};

const tempInput = Number(prompt("Введи температуру на вулиці:"));
weather.temperature = tempInput;

if (weather.isFreezing()) {
  alert("Температура нижче 0 градусів Цельсія");
} else {
  alert("Температура 0 або вище градусів Цельсія");
}


const user = {
  name: "Олена",
  email: "olena@email.com",
  password: "qwerty123",

  login() {
    const inputEmail = prompt("Введи свій email:");
    const inputPassword = prompt("Введи свій пароль:");
    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Вхід успішний");
    } else {
      alert("Невірний email або пароль");
    }
  },
};
user.login();


const movie = {
  title: "Вартові часу",
  director: "Андрій Коваль",
  year: 2023,
  rating: 8.5,
  isTopRated() {
    return this.rating > 8;
  },
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Цей фільм топовий?", movie.isTopRated());
