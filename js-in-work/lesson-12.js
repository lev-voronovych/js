const user = {
    mood: 'happy',
    hobby: 'skydiving',
    premium: false
}
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}
console.log(countProps(user));

function findBestEmployee(employees) {
    let bestEmployee = 0;
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}

const employees = {
    Anna: 29,
    Povlo: 35,
    MISHA: 1,
    Danil: 99
};

console.log(findBestEmployee(employees));

function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
}

function calculateTotalPrice(allProducts, productName) {
    let total = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            total = product.price * product.quantity;
            break;
        }
    }
    return total;
}

const products = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Cherry", price: 40, quantity: 2 }
];

console.log(getAllPropValues(products, "name"));
console.log(calculateTotalPrice(products, "Banana")); 
console.log(calculateTotalPrice(products, "Cherry")); 