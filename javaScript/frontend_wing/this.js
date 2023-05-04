// let person = {
//     fullname: '짐코딩',
//     age: 20,
//     printThis: function() {
//         console.log(this);
//         console.log(this === person);
//         console.log(this === window);
//     }
// };
// //person.printThis();
// let printThis = person.printThis;
// printThis();

// function printThis() {
//     console.log(this); // default this => window
// }
// printThis();

// let person1 = {
//     name: '홍길동1',
//     printThis: printThis
// };
// person1.printThis(); // this => person1

// let person2 = {
//     name: '홍길동2',
//     printThis: printThis
// };
// person2.printThis(); // this => person2

// let person3 = {
//     name: '홍길동3',
//     printThis: printThis
// };
// person3.printThis(); // this => person3

// window
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log(this); // button 요소
//     console.log(this === btn); // true
// });

// ES5 bind - this 설정
// 'use strict';
// function printThis() {
//     console.log(this); 
// }
// printThis();
// let person1 = {
//     name: '홍길동'
// };
// let person2 = {
//     name: '김길동'
// };
// printThis(); // this => window 
// let printThis1 = printThis.bind(person1);
// printThis1(); // this => person1
// let printThis2 = printThis1.bind(person2);
// printThis2(); // this => person1 

// 3000밀리초(3초) 후에 alert 창 띄우기
// setTimeout(function() {
//     alert('Hello!');
// }, 3000);

// let person = {
//     name: '짐코딩',
//     age: 20,
//     hello: function() {
//         let that = this;
//         setTimeout(function() {
//             console.log(that); // this => person
//             console.log(that.name);
//             console.log(that.age);
//         }, 1000);
//     }
// }
// person.hello();

let person = {
    name: '짐코딩',
    printThis: () => {
        console.log(this); // this => window
    }
}

person.printThis();