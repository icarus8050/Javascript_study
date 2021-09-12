### (Javascript) Dream Coding 01

###### 자바스크립트 2. 콘솔에 출력, script async 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향 <a href="https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=3&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9by%EC%97%98%EB%A6%AC">Link</a>

<br />

<br />

#### async vs. defer

html 에 js 를 포함할 때 어느 것이 더 효율적인가? 

- case 1;

  ```html
  <head>
      <script src="..."></script>
  </head>
  ```

  html parsing > script file detected > pausing parsing > execute js file > keep parsing html > **ready**

  - js file 이 클 경우, 사용자가 웹 사이트에 접근하기까지 시간이 많이 수요될 수 있음

- case 2;

  ```html
  <head>
      
  </head>
  <body>
      <script src="..."></script>
  </body>
  ```

  html parsing > **ready** > execute js file 

  - 흔히 사용하는 방법이지만, js 에 의존적인 사이트라면 사용자가 정상적인 페이지를 보기 전까지는 서버에서 js 가 load 되는 걸 기다려야 함.

- case 3;

  ```html
  <head>
      <script async src="..."></script>
  </head>
  ```

  async 는 boolean 

  html parsing > async detect, download js file > download completed > keep parsing > **ready**

  - body 끝에 사용하는 것보다는 js file 이 병렬적으로 일어나기 때문에 다운로드 되는 시간이 절약됨.
  - 단점은 html 이 parsing 되기 전에 js 가 실행됨... 
  - 사용자가 페이지를 보는 데에 시간이 여전히 소요됨.

- case 4;

  ```html
  <head>
      <script defer src="..."></script>
  </head>
  ```

  html parsing > detect defer > keep parsing, download js file > **ready**

  - parsing 하는 동안 js 를 다운하여 실행. 가장 좋은 방법! 
  - 필요한 js 를 받아놓은 뒤, 사용자에게 페이지를 노출한 다음 js 실행

<br>

<br>

#### why do we need to use 'use strict'?

```javascript
'use strict'; 
```

ECMAscript5 에 추가되어 있음.

바닐라 자바스크립트로 개발을 할 때는, js file 가장 상단에 추가한 뒤 strict mode 로 진행.

더 빠르게 진행되고, 더 효율적인 성능을 보임! 

<br>

<br>

<br>

<br>

###### 자바스크립트 3. 데이터타입, data types, let vs var, hoisting <a href="https://youtu.be/OCCpGh4ujb8">Link</a>

`프로그래밍에서 가장 중요한 것? 입력 - 연산 - 출력`; 콘솔이나 ui 에서 입력받은 데이터를 연산해서 알맞게 사용자에게 출력해 주는 것! 

<br>

<br>

#### Variables | rw(read, write) 

**let** ES6 에서 추가된 것. <u>자바스크립트에서 변수를 선언할 수 있는 단 하나의 keyword</u>. Read 와 Write 가 가능

_**var?** never use this!_ 

- _var hoisting_ 값을 어디에 선언했냐에 관계 없이 가장 위로 끌어올림. 
- block scope 를 무시해버림

**constant = const** 값이 할당되면 바뀌지 않는 값.  Immutable 보안에 탁월. 혹시 모를 만일의 실수를 방지. Read 만 가능! 다시 다른 값으로 재할당이 불가능함.

**Variable types**

- Primitive; single item 
  - number <span style="color: lightgrey;">number as it is</span>
  - string <span style="color: lightgrey;">characters ,</span> <span style="color: lightgrey;">template literal 백틱(``) </span>
  - boolean <span style="color: lightgrey;">true or false(0, null, undefiened, NaN, '')</span>
  - null <span style="color: lightgrey;">null, nothing-ness!</span>
  - undeifination <span style="color: lightgrey;">선언은 되었지만, 값은 지정되지 않음</span>
  - symbol <span style="color: lightgrey;">고유한 식별자가 필요하거나, 동시다발적인 것에서 우선순위를 주고 싶을 때 사용, </span> <span style="color: lightgrey;">console.log 로 뽑을 땐 symbol.description 의 형태로 값을확인</span>

- Dynamic typing; runtime 에 할당된 값에 따라서 type 이 변하거나 정해짐

  ```javascript
  let text = 'hello';
  // value : hello | type: string 
  text = 1; 
  // value : 1 | type: number 
  text = "7" + 5;
  // value: 75; | type: string 으로 나옴
  text = "8" / "2";
  // value : 4 | type: number! 연산자를 썼기 때문?
  ```

<br>

<br>

<br>

<br>

###### 자바스크립트 4. 코딩의 기본 operator, if, for loop 코드리뷰 팁 <a href="https://youtu.be/YBjufjBaxHo">Link</a>

<br />

<br />

#### 연산과 반복문 

**💥 Operators**

- **String concatenation ` 문자의 연산 +`**

- **Numeric operators `숫자의 연산 + - * / % **`**

- **Increment and decrement `변수++, ++ 변수, 변수--, -- 변수`**

- **Assignment operators `할당 = += -= *= /=`**

- **Comparison operators `비교 < <= > >=`**

- **💥 Logical operators `논리 || (or) && (and) ! (not)`**

  - <span style="color: darkred;">OR (||) 연산자</span>

  ``` javascript
  const value1 = false;
  const value2 = 4 < 2;
  console.log(`or: ${value1 || value2 || check()}`);
  
  function check() {
      for (let i = 0; i < 10; i++) {
          console.log('oops');
      }
      return true;
      // anyway check() is true! 
  }
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132983073-40091fe8-dd8f-4c29-bf98-54f557da8359.png)

  ```javascript
  const value1 = true;
  const value2 = 4 < 2;
  console.log(`or: ${value1 || value2 || check()}`);
  function check() {    
      for (let i = 0; i < 10; i++) {        
          console.log('oops');    
      }    
      return true;   
      // anyway check() is true! 
  }
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132983191-48255431-5eb1-42e4-b35c-610847f79e8f.png)

  or 연산자는 하나라도 true 면 연산을 멈춰버림. 따라서 check() 에서 주르륵 다 검사해야 했던 것 앞서 value1 에서부터 true 가 나와버리면 바로 true 를 반환함! 그래서 console.log 의 결괏값이 달라짐. 

  또한, 연산이 필요하다면 함수처럼 무거운 애들을 가장 뒤에다 배치함! 가벼운 것일수록 빠르게 연산될 수 있게.

  - <span style="color: darkred;">AND (&&) 연산자</span>

  ```javascript
  const value1 = false;
  const value2 = 4 < 2;
  console.log(`and : ${value1 && value2 && check()}`);
  // 하나라도 false 면? 게임 끝. false 로 반환 == 즉, 다 true 여야 true 값이 나옴.
  ```

  - <span style="color: darkred;">NOT (!) 연산자</span>

    값을 반대로 바꿔줘버림

  ```javascript
  const value1 = false;
  console.log(!value1);
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132983366-d0993123-e0c9-4e33-8f5e-db3f828e455b.png)

- **Equality**
  - loose equality `==`
  - strict equality `===`

```javascript
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie3 === ellie1);
```

![image](https://user-images.githubusercontent.com/89691274/132983462-5f40cc24-af58-4e39-bced-30c8431698e8.png)

​		ellie1 과 2 에는 각각 다른 reference 가 저장되어 있기 때문에 false,

​		ellie1 과 2 에는 각각 다른 값이 저장되어 있기 때문에 false,

​		ellie1 을 3 으로 할당했기 때문에 마지막 건 true 로 도출 가능! 

```javascript
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
```

![image](https://user-images.githubusercontent.com/89691274/132983542-f3299440-65ac-425f-9351-358050d1cab8.png)

​	위 여섯 개의 equality 는 각각 저렇게 출력됨. _하... 헷갈린다..._

​	0과 null, undefined, empty string 은 false 로 간주될 수 있음. (1, 3)

​	0 은 boolean 타입이 아니기 때문에 false 로 도출. (2)

​	'' 또한 boolean 타입이 아니기 때문에 false (4)

​	null 은 undefined 은 같은 것으로 간주됨 (5)

​	null 은 undefined 은 다른 타입으로 간주됨 (6)

<br>

- **Conditional Operator1 `if  if else  else  `**

  ```javascript
  const name = 'ellie';
  if (name === 'ellie') {
      // if 가 true 면 이 블럭을 실행 
      console.log('welcome, Ellie!');
  } else if (name === 'coder') {
      // if 가 false 면 여기를 실행
      console.log('You are an amazing coder');
  } else {
      // if, if else 둘 다 아니면 여기를 실행
      console.log('unknown');
  }
  ```

  ```javascript
  // 간단하게 쓰면
  console.log(name === 'ellie' ? 'yes' : 'no');
  ```

- **Conditional Operator2 `switch  `**

  ```javascript
  const browser = 'IE';
  switch (browser) {
      case 'IE': 
          console.log('go away!');
          break;
      case 'Chrome': 
          console.log('love ya');
          break;
      case 'Firefox':
          console.log('luv ya');
          break;
      default:
          console.log('same all')l
          break;
  }
  ```

  if else 를 여러 개 반복하게 된다면 switch 를 쓰는 것이 좋음.

- **Loops `while  do while  for` **

  false 가 나오기 전까지 무한대로 반복되는 것. 

  ```javascript
  let i = 3;
  while (i > 0){
      console.log(`while : ${i}`);
      i--;
  }
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132983831-a371c592-b3ab-43fb-8803-3e7ee66d209c.png)

  ```javascript
  let i = 3;
  do {
      console.log(`do while : ${i}`);    
      i--;
  } while (i > 0)
  ```

  먼저 블럭을 실행한 다음에 조건에 맞는지 맞지 않는지를 검사! 

  <br>

  ```javascript
  // for 문법 => for (begin 초깃값; condition 조건문; step 증감식), 
  for (i = 3; i > 0; i--) {
      console.log(`for: ${i}`);
  }
  
  for (let i = 3; i > 0; i = i - 2) {
      // 블럭 안에 지역 변수를 선언하여 작성 가능
      console.log(`inline variable for : ${i}`);
  }
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132983970-d68c4978-89ed-4093-9ec0-378328e5e43c.png)

  for 문의 중첩

  ```javascript
  for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
          console.log(`i: ${i}, j: ${j}`);
      }
  }
  ```

  이건 굳이 콘솔로 뽑지 않겠음... 

  for 문제! 

  ```javascript
  // 문제 1. 0 부터 10까지 짝수만 나오게
  // (내 답안)
  for (let i = 0; i < 11; i++) {
      if (i % 2 == 0){
          console.log(i);
      } else {
          continue;
      }
  }
  // Ellie's
  for (let i = 0; i < 11; i++) {
      if (i % 2 !=== 0) {
          continue;
      }
      console.log(`${i}`);
  }
  ```

  ```javascript
  // 문제2. 0 부터 10까지 루프, 8을 만나면 그만
  // (내 답안)
  for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 8; j++) {
          console.log(j);
      }
      break;
  }
  // Ellie's
  for (let i = 0; i < 11; i++) {
      if (i > 8) {
          break;
      }
      console.log(`${i}`);
  }
  ```

  엘리와의 풀이는 약간 다르지만..... 어쨌든 풀었으니 넘어가자 ^__^ 풀었다는 게 중요하니까. 

<br>

<br>

<br>

<br>

###### 자바스크립트 5. Arrow Function은 무엇인가? 함수의 선언과 표현 <a href="https://youtu.be/e_lU39U-5bQ">Link</a>

**💥 Function**

input (parameter) 를 받아 output 을 도출! 

```javascript
function functionName(param1, param2) {
    ... 
    return;
}
```

- 하나의 함수는 하나의 일만! 
- command 와 verb 형태로 이름을 지어야 한다
- 함수는 javascript 에서 객체의 일종으로 작용함

- _ref)_ 자바스크립트 함수는 따로 type 을 정하지 않아도 값이 나오기 때문에 Number, string 등의 정확한 값이 필요하다면 typescript 를 사용하는 게 좋다! 

<br>

**Parameters**

- Premitive 에서는 value 를 그대로 전달함

- Object 에서는 reference 를 전달함

  ```javascript
  function changeName(obj){
      obj.name = 'coder';
      // changeName 이라는 함수는 전달된 obj 의 name 을 coder 로 할당하는 함수.
  }
  const ellie = {name: 'ellie'};
  // ellie 라는 이름을 coder 로! 
  changeName(ellie);
  console.log(ellie);
  ```

  ![image](https://user-images.githubusercontent.com/89691274/132985055-26a0c984-3e30-4cb0-8d13-991e70b35d5a.png)

  Object 는 함수 안에서 Object 의 값을 변경하게 되면 그대로 변경된 사항이 Memory 에 저장됨

  <br>

**Default Parameters**

```javascript
function showMessage(message,from){
    console.log(`${message} by ${from}`);
}
showMessage(Hi!);
```

![image](https://user-images.githubusercontent.com/89691274/132985139-3cd0d2a1-9831-4ace-bfa2-ce2a5229c5fc.png)

```javascript
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage(Hi!);
```

![image](https://user-images.githubusercontent.com/89691274/132985161-f3cc5c71-e323-4be3-bb95-5a6cf33bb2d3.png)

<br>

**Rest Parameters**

```javascript
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');
```

![image](https://user-images.githubusercontent.com/89691274/132985201-df27d7ec-7fb8-4ac6-b228-498f6cc1d687.png)

... dot 3 개를 쓰게 되면 **배열** 의 형태로 전달이 됨! 

```javascript
// 더 간단하게 쓰려면
function printAll(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');
```

결과는 위와 같다

<br>

**Local scope**

```javascript
// 함수의 범위. 
let globalMessage = 'global'; 
function printMessage() {
    let message = 'hello'; // 블럭 안에 있으므로 지역 변수
    console.log(message);
    console.log(globalMessage); // 안에 있지만 바깥의 것을 볼 수 있다.
}
```

_자바스크립트에서는 밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다._ 

<br>

**Return**

```javascript
function sum (a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);
```

**Early Return**

```javascript
// bad examples 
function upgradeUser(user) {
    if (user.point > 10) {
        // ...blah blah
    }
}

//good examples
function upgradeUser(user) {
    if (user.point <= 10) {
        return; // 조건이 맞지 않을 때 빨랑 함수 종료해야 좋은 함수! 
    }
     // ...blah blah
}
```

<br>

**Function Expression**

```javascript
const print = function() { // 이름 없는 함수. 이름을 짓지 않고 필요한 곳에 바로 할당할 수 있음
    console.log('print');
}
print();
const printAgain = print;
printAgain();
```

![image](https://user-images.githubusercontent.com/89691274/132985493-9e770773-460d-4cb7-ac73-aacbe50721c3.png)

<br>

**Callback**

```javascript
function randomQuiz (answer, printYes, printNo) {
    if (answer === 'love you') {
        printYest();
    } else {
        printNo();
    }
}
function printYes() {
    console.log('Yas');
}
function printNo() {
    console.log('Nope');
}
randomQuiz('wrong'. printYes, printNo);
```

두 가지의 콜백 함수가 PrintYes(), PrintNo() parameter 에 적용되어서 상황에 따라 호출하는 함수가 달라짐.

<br>

**Arrow Function**

함수를 간결하게 만들어 줌.

```javascript
const simeplePrint = function() {
    console.log('simplePrint');
}
const simplePrint = () => console.log('simplePrint');

```

<br>

<br>

<br>

<br>

###### 자바스크립트 6. 클래스와 오브젝트의 차이점(class vs object), 객체지향 언어 클래스 정리 <a href="https://youtu.be/_DLhUBWsRtw">Link</a>

**객체지향언어**

class 는 조금 더 연관 있는 것들을 한데 묶어놓는 것. *class 안에는 속성 (fields), 행동 (methods) 가 포함되어 있음.*

class 를 이용하여 새로운 instance 를 생성하는 것이 Object

- Class <span style="color: lightgrey;">template</span>

- Object <span style="color: lightgrey;">Instance of class</span>

  - class 선언

    ```javascript
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
    ```

    ```javascript
    const ellie = new Person('ellie', 20);
    console.log(ellie.name);
    console.log(ellie.age);
    ```

    ![image](https://user-images.githubusercontent.com/89691274/132990407-7a391e46-37e7-4436-aa8a-7df810c96742.png)

    ```javascript
    ellie.speak();
    ```

    ![image](https://user-images.githubusercontent.com/89691274/132990431-7bc42ace-51dd-4f52-802f-cff6d24b3b7b.png)

  - Getter and Setters

    ```javascript
    class User{
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get() {
            // get() 을 이용하여 값을 return
            return this.age;
        }
        set(value) {
            // set() 을 이용하며 값을 set. value를 받아와야 함.
            this.age = value;
        }
    }
    
    ```

    _Age 라는 getter를 정의하는 순간 this.age 는 getter 를 호출함._ 

    _setter 를 정의하는 순간 this.age = age; 가 할당되는 것이 아니라 setter가 호출됨_

    ![image](https://user-images.githubusercontent.com/89691274/132990648-b63c36d9-be02-4097-a5ea-fc785bf51d8c.png)

    _holy cannot following this ......._

    Getter 와 Setter 안에 쓰이는 변수는 째금씩 이름을 바꿔준다. 겹치지 않게! 

    ```javascript
    class User{
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get() {
            // get() 을 이용하여 값을 return
            return this._age;
        }
        set(value) {
            // set() 을 이용하며 값을 set. value를 받아와야 함.
            this._age = value < 0 ? 0 : value;
            // value 가 0 보다 작으면 0 을 설정함.
        }
    }
    ```

    <br>

  - Static (just 참고)

    Class 안의 fields 와 methods 들은 새로운 object 가 생성될 때마다 고대로 복제되어서 값만 지정값으로 변경됨. 간혹, object 와 data 에 상관 없이 동일하게 사용되는 것들이 있다. 그럴 때 Static 을 사용함! 

    ```javascript
    class Article {
        static publisher = 'dream coding';	
    	constructor(articleNum) {
            this.articleNum = articleNum;
        }
    	stact printPublisher() {
            console.log(Article.publisher);
        }
    }
    console.log(Article.publisher);
    Article.printPublisher();
    
    // Tips.
    // static 은 Object 마다 할당되는 것이 아니라, Class 단위로 할당이 되기 때문에
    // console.log(article1.publisher); 이렇게 쓰면 값이 undefined 로 나온다.
    // 그러므로 console.log(Article.publisher); class 단위로 이렇게 써야 잘 굴러감. 
    // 함수를 호출할 때도 마찬가지! 
    ```

    _ref_ Typescript 에서도 자주 쓰임. Object 에 상관 없이 공통적으로 class 에서 쓸 수 있는 거라면 static 을 자주 씀! 

    <br>

  - Inheritance and overriding상속과 다양성

    ```javascript
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
    ```

    ![image](https://user-images.githubusercontent.com/89691274/132991200-2b171f1b-dce1-4a0d-a243-c0aee0ab0c86.png)

    ```javascript
    class Triangle extends Shape {
        // 이미 정의된 class 를 끌어와서 수정 가능 overriding
        // 즉, 필요한 함수만 재정의해서 사용!
         getArea() {
            return (this.width * this.height) / 2;
        }
    }
    const triangle = new Triangle(20, 20, 'red');
    triangle.draw();
    console.log(triangle.getArea());
    ```

    ![image](https://user-images.githubusercontent.com/89691274/132991362-75ae8b81-2ac1-4343-886b-7f86aba16644.png)

    <br>

  - instanceOf 
    Class 를 이용하여 만들어진 새로운 instance

    ```javascript
    console.log(regtangle instanceof Regtangle);
    console.log(triangle instanceof Regtangle);
    console.log(triangle instanceof Triangle);
    console.log(triangle instanceof Shape);
    console.log(triangle instanceof Object);
    // 왼쪽에 있는 object 가 오른쪽에 있는 class 의 instance 인지 아닌지,
    // 해당 object 가 오른쪽 class 를 이용하여 만들어진 것이 맞는지 아닌지 true or false return
    ```

    ![image](https://user-images.githubusercontent.com/89691274/132991547-7ae2dfd2-6e15-46ef-ad87-a116027d8c0d.png)

    <br>

- **reference!** : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

  자바스크립트의 objects!

  <br />

  <br />

  <br />

  <br />

  __Noted at 2021. 09. 12__

  

