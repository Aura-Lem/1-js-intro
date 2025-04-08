const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const keys = Object.keys(person);  // istraukia objektu raktus i masyva.

for (const key of keys) {
    console.log(person[key]);
}

for (const key in person) {
    console.log(person[key]);
}

const text = 'pavasaris';

const symbols = {};

for (const s of text) {
    if (symbols[s]) {
        symbols[s]++;
    } else {
        symbols[s] = 1;
    }
}

let max = 0;
for (const s in symbols) {
    if (symbols[s] > max) {
        max = symbols[s];
    }
}
console.log(max);

const maxSymbols = [];
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);