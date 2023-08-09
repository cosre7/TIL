function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

// firstNumber, secondNumber는 function 안에서만 존재한다
// console.log(firstNumber); // not defined 에러

function divide(a, b) { 
    console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
    name: 'nico',
    sayHello: function(otherPersonsName) {
        console.log('hello ' + otherPersonsName + ' nice to meet you!');
    }
}

console.log(player.name);
player.sayHello('lynn');