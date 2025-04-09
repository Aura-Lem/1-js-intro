const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];

texts.sort();
console.log(texts);

const pseudo = ['d', 'b', 'ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();
console.log(pseudo);

const numbers = [10, 2, 8, 1, 12, 23, 4 ,6];

console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},
    {name: 'Jonas', age: 99, isMarried: true},    
    {name: 'Maryte', age: 88, isMarried: false}, 
];

people.sort((a, b) => a.age - b.age);   //rikiuoja pagal amziu
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);  // rikiuoja vardus pagal vardo ilgi
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);    // rikiuoja vardus pagal abecele
console.log(people);

people.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);    
console.log(people);