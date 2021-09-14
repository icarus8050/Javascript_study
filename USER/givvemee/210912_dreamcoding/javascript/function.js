// function changeName(obj){
//     obj.name = 'coder';
// }
// const ellie = {name: 'ellie'};
// changeName(ellie);
// console.log(ellie);

// function showMessage(message,from = 'unknown'){
//     console.log(`${message} by ${from}`);
// }
// showMessage('Hi!');

// function printAll(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }
// printAll('dream', 'coding', 'ellie');

function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');

function sum (a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

const print = function() { // 이름 없는 함수. 이름을 짓지 않고 필요한 곳에 바로 할당할 수 있음
    console.log('print');
}
print();
const printAgain = print;
printAgain();