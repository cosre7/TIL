"use strict";

import { numbers, students, fluits } from './data.js';

console.log('숫자가 모두 8 이하 인가요?',
    numbers.every((number) => number <= 8)    
)