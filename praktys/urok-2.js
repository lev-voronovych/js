
const repeat = function (x, action) {
    for (let i = 0; i < x; i += 1) {
    action(i);
}
}

// const printValue = function (value) {
//     console.log(value);
    
// }
const printValue = (value) => {
    console.log(value);
}
const prettyPrint = (value) => {
    console.log('Logging value: ', value);
}

// const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
// }

repeat(5, printValue ); 
repeat(3 , prettyPrint);