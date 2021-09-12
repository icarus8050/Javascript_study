// const value1 = false;
// console.log(!value1);

// const value1 = true;
// const value2 = 4 < 2;
// console.log(`or: ${value1 || value2 || check()}`);
// function check() {
//     for (let i = 0; i < 10; i++) {
//         console.log('oops');
//     }
//     return true;
// }
// const ellie1 = {name: 'ellie'};
// const ellie2 = {name: 'ellie'};
// const ellie3 = ellie1
// console.log(ellie1 == ellie2);
// console.log(ellie1 === ellie2);
// console.log(ellie3 === ellie1);

// console.log(0 == false);
// console.log(0 === false);
// console.log('' == false);
// console.log('' === false);
// console.log(null == undefined);
// console.log(null === undefined);

// let i = 3;
// do {
//     console.log(`do while  : ${i}`);    
//     i--;
// } while (i > 0)

// for 문법 => for (begin 초깃값; condition 조건문; step 증감식), 
// for (i = 3; i > 0; i--) {
//     console.log(`for: ${i}`);
// }
// for (let i = 3; i > 0; i = i - 2) {
//     console.log(`inline variable for : ${i}`);
// }
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }


// 0 부터 10까지 짝수만
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0){
        console.log(i);
    } else {
        continue;
    }
}
// 0 부터 10까지 루프, 8을 만나면 그만
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 8; j++) {
        console.log(j);
    }
    break;
}