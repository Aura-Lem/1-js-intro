const marks = [10, 2, 8, 4, 6];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sum += mark;
}

console.log(sum);

// is eiles ima visas reiksmes is masyvo.
let sum2 = 0;
for (const mark of marks) {
    sum2 += mark;
}
console.log(sum2);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];

for (const name of names) {
    const details = {
        name: name,
        firstLetter: name[0],
        lastLetter: name.at(-1),
        size: name.length,
        reverse: name.split('').reverse().join(''),
    };
    nameSizes.push(details);
}
console.log(nameSizes);