/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const list = [];
console.log(list);

list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4, 6);
console.log(list);

list.push(1, 2, 3, 4, 5);
console.log(list);

const numbers = [10, 2, 8, 4, 6];

const doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    doubleNumbers.push(number *2);
}

console.log(doubleNumbers);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const namesSizes = [];
const namesFirstLeters = [];
const upperCaseNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    namesSizes.push(name.length);
    namesFirstLeters.push(name[0]);
    upperCaseNames.push(name.toUpperCase());
}

console.log(namesSizes);
console.log(namesFirstLeters);
console.log(upperCaseNames);

const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n12 = [];

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
} for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
}

console.log(n12);


