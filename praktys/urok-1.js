// const withdraw = function (amount, balance) {
//     if (amount === 0) {
//         console.log("Введіть суму для зняття");
//     }
//     else if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//     }
//     else {
//         console.log("операція успішна"); 
//     }
// }


const withdraw = function (amount, balance) {
   let messege ="";
    if (amount === 0) {
        messege = "Введіть суму для зняття";
        return messege;
    };

    if (amount > balance) {
        messege = "Недостатньо коштів на рахунку";
        return messege;
    };

    messege = "операція успішна";
    return messege;
}
let result = withdraw(0, 1000);
console.log(result);
// console.log(withdraw(0, 1000));
withdraw(0, 1000);
// withdraw(1500, 1000);
// withdraw(500, 1000);