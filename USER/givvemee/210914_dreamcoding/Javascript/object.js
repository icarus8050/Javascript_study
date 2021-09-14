'use strict';

const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}
// 이런 식으로 하게 되면 인자가 늘어날 경우에 줄줄이 써야 하는 불편함이 생김
// 이것을 개선하고자 object 를 씀

const ellie = {name: 'ellie', age: 4};
function print(person) {
    console.log(person.name);
    console.log(person.age);
}
print(ellie);

// object 를 만드는 방법
// 괄호를 이용한 oject literal
const obj1 = {};
// new 라는 키워드를 이용하면 oject constructor
const obj2 = new Object();

ellie.hasJob = true; 



const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 4};
const person3 = {name : 'dave', age: 3};

// Object 를 여러 개 생성할 때 간략하게 하자면
function makePerson(name, age) {
    return {
        name: name,
        age: age
    }
}

// key 와 value 값이 동일하다면 아래처럼 생략 가능 
function makePerson(name, age) {
    return {
        name,
        age
    }
}

const person4 = makePerson('givvemee', 4);
console.log(person4)

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

// for ... in / for ... of 

// 모든 key 들을 받아와서 처리하고 싶을 때
const array = [1, 2, 4, 5];
// 데이터의 모든 값을 찍으려면 아래처럼 했어야 했다.
for (let i = 0; i < array.length; i++) {
    console.log(i);
}
// for ... of 를 사용하면
// for (value of array) {
//     console.log(value);
// }

// cloning 
const user = {name: 'ellie', age: '20'};
const user2 = user;
// 유저라는 변수 안에 reference 들이 들어 있음 
// user2 의 변수는 user 안 reference 의 값이 user2 에도 동일하게 할당되어 들어있음.

user2.name = 'coder'; 
console.log(user2);

const user4 = {}; 
// 비어져 있는 것을 정의한 뒤, 
Object.assign(user4, user);
// 복사 하고자 하는 것을 넣어준다
console.log(user4);
console.clear();

const fruit1 = {color: 'red'};
const fruit2 = {coloe: 'blue', size: 'big'};
const fruit3 = {coloe: 'black', size: 'big'};

const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);