"use strict";

import { numbers, students, fluits } from './data.js';

// const result = numbers.reduce((acc, cur, idx, src) => {
//     console.log('acc :', acc, 'cur :', cur, 'idx :', idx, 'src :', src);
//     return acc + cur;
// }, 0);

// console.log(result);

console.log(fluits);
const result = fluits.reduce((acc, cur) => {
    console.log('acc :', acc, 'cur :', cur);
    if (acc.includes(cur) === false) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(result);