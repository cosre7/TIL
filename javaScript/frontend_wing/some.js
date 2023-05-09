"use strict";

import { numbers, students, fluits } from './data.js';

console.log('과일 중에 배가 있나요?',
    fluits.some((fluit, index) => {
        console.log('index :', index, 'fluit :', fluit);
        return fluit === '배';
    })
)

console.log('숫자 중에 7 이상인 숫자가 있나요?',
    numbers.some((number) => number >= 7)
)

console.log('수학 점수가 100점인 학생이 있나요?',
    students.some((student) => student.math === 100)
)

console.log('영어 점수가 50점 미만인 학생이 있나요?',
    students.some((student) => student.english < 50)
)