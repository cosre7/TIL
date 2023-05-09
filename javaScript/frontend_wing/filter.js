"use strict";

import { numbers, students, fluits } from './data.js';

console.log('짝수만 출력',
    numbers.filter((number) => number % 2 === 0)
)

console.log('홀수만 출력',
    numbers.filter((number) => number % 2 === 1)
)