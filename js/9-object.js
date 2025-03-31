/*
OBJECT - objektas, (kitose kalbose šiek tiek panašu į; hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = {
    age: 99,
    name: 'Jonas',
    isMarried: true,
};
console.log(person);

// Sveiki, mano vardas X.
console.log(`Sveiki, mano vardas ${person['name']}.`);
// Man yra X metu.
console.log(`Man yra ${person.age} metai.`)

console.log(person['isMarried']);

// Standartine sintakse, kaip paimti reiksme
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// Supaprastinta sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = {
    'color': 'red',
    '5': 777,
    'is married': true,
};

console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);
console.log(demo['is married']);

console.log(demo.color);


const pc = {
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10',
};

console.log(pc);

pc.ram = 32;
console.log(pc);

const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNumbers: [],
    parents: [
        {
            name: 'Petras',
            age: 77,
            phoneNumbers: [1111111, 33333333],
        },
        {
            name: 'Ona',
            age: 66,
            phoneNumbers: [2222222, 4444444],
        },
    ],
};

console.log(student.name);
console.log(student.phoneNumbers.length);
console.log(student.parents.length);
console.log(student.parents[0].name);
console.log(student.parents[1].name);
console.log(student.parents[0].phoneNumbers.length);
console.log(student.parents[1].phoneNumbers[1]);

const studentName1 = 'Jonas';
const studentAge1 = 99;
const studentIsMarried1 = true;
const studentName2 = 'Maryte';
const studentAge2 = 88;
const studentIsMarried2 = false;

//                 name, age, isMarried 
const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77];

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const stud2 = {
    age: 88,
    aisMarried: false,
    name: 'Maryte'
};
console.log(stud1.name);
console.log(stud2.name);