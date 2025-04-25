/*
Написати скрипт коду підрахунку всіх зарплат працівників. К-ть працівників вміщує в собі змінна employees.
Зарплата кожного - радномне число від 1 до 500
Записати суму в змінну totalSalary і вивести в консоль
*/
// створити зміні
let employees = 5;
let totalSalary = 0;
let minSalary = 1;
let maxSalary = 500;
// згенерувати випадкове число від 1 до 500

// перебрати скільки заробляє працівник
for (let i = 1; i <= employees; i += 1  ){
    let salary =  Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
    console.log(`Зарплата працівника ${i} - ${salary}`);
    //totalSalary = totalSalary + salary;
    totalSalary += salary;
}
console.log(totalSalary)
//  вивести в консоль