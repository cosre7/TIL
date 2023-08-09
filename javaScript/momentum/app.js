const age = 96;
// function calculateKrAge(ageOfForigner) {
//     ageOfForigner + 2;
// }
// const krAge = calculateKrAge(age); // undefined

// function calculateKrAge(ageOfForigner) {
//     return ageOfForigner + 2;
// }
// const krAge = calculateKrAge(age); // 98

function calculateKrAge(ageOfForigner) {
    ageOfForigner + 2;
    return 'hello';
}
const krAge = calculateKrAge(age); // hello
console.log(krAge);