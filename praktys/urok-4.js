// class Rectangle{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rect1 = new Rectangle(10, 5);
// const rect2 = new Rectangle(20, 10);
// console.log(rect1.getArea());
// console.log(rect2.getArea());

class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name);
    }
} 
class Dog extends animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(this.name + ' barks');
    }
}   
const cat = new animal('molly');
cat.speak();
const dog = new Dog('duke');
dog.speak();