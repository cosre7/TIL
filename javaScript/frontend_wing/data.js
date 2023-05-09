export const numbers = [1, 2, 3, 4, 5, 6, 7];

export class Student {
    constructor(name, korean, english, math) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }
}

const student1 = new Student('홍길동', 95, 87, 100);
const student2 = new Student('김길동', 96, 86, 75);
const student3 = new Student('박길동', 97, 85, 70);
const student4 = new Student('오길동', 98, 84, 68);

export const students = [student1, student2, student3, student4];

export const fluits = ['사과', '딸기', '배', '참외', '딸기', '수박'];