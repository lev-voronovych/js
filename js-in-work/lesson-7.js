
const numbers = [5, 7, 9];
numbers[1] = 10;
console.log(numbers); 


const strings = ["apple", "banana", "cherry"];
strings.push("starfruit");
console.log(strings);


const numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

const numbersArray2 = [14, 2, 3, 42, 5];
for (let i = 0; i < numbersArray2.length; i++) {
    console.log(numbersArray2[i]);
}


const stringsArray = ["apple", "banana", "cherry", "lesesesel", "strawberry"];
for (let i = 0; i < stringsArray.length; i++) {
    if (stringsArray[i].length > 5) {
        console.log(stringsArray[i]);
    }
}
const numbersArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = Math.max(...numbersArray3);
console.log(maxNumber);


const numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersArray4.filter(number => number % 2 === 0);
console.log(evenNumbers);
