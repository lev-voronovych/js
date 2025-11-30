// *1. створити клас CountdownTimer, який: приймає селектор елемента(де показувати таймер),
// і дату, до якої вести відлік, автоматично оновлює значення днів, годин, хвилин і секунд,
// зупиняється, коли час доходить до нуля.
//  CountdownTimer — клас, який одразу запускає таймер при створенні.
// *2. В конструкторі додати методи
// для запуску таймера та для оновлення інтерфейсу
// *3.у методі  start() обраховується різниця. А коли час доходить до нуля (<= 0) → інтервал зупиняється,
// і показується повідомлення “ Час вийшов!”.
// *4.У методі updateClock() час розраховується за різницею між targetDate і new Date().
// Клас повинен знати, куди саме виводити дні, години, хвилини, секунди.
// Тому в конструкторі ми “запам’ятовуємо” елементи DOM, які будемо оновлювати

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     drive() {
//         console.log(`${this.name} їде!`);
//     }
// }
// const car1 = new Car("BMW");
// const car2 = new Car("Tesla");\



class CountdownTimer {
  constructor({selector , targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector("[data-value='days']"),
      hours: document.querySelector("[data-value='hours']"),
      minutes: document.querySelector("[data-value='mins']"),
      seconds:document.querySelector("[data-value='secs']"),
    }
    this.start()
  }
  start() {
    this.intervalId = setInterval(() => {
      let currentTime = Date.now();
      let deltaTime = this.targetDate - currentTime;
      console.log(deltaTime)
      if (deltaTime === 0) {
        clearInterval(this.intervalId);
        alert("time out");
        return;
      }
      
      this.updateClock(deltaTime);
    } , 1000)
  }

  updateClock(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.minutes.textContent = mins;
    this.refs.seconds.textContent = secs;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2026"),
});

