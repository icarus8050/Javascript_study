'use strict';
class Person {
    // constructor; 생성자 
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} : hello!`);
    }
}
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

class Shape { 
	constructor(width, height, color) {
        // 세가지의 fields
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // methods 두 개
    draw() {
        console.log(`drawing  ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Regtangle extends Shape{} 
    // Rentangle 이라는 class 를 만들고 싶으면 shape 으로 연장. 
    // Shape 에서 정의한 것이 자동적으로 Regtangle 에 포함
const regtangle = new Regtangle(20, 20, 'blue');
regtangle.draw();
console.log(regtangle.getArea());

class Triangle extends Shape {
    // 이미 정의된 class 를 끌어와서 수정 가능 overising
     getArea() {
        return (this.width * this.height) / 2;
    }
}
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.log(regtangle instanceof Regtangle);
console.log(triangle instanceof Regtangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);