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
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
    {name: 'Jonas', age: 99},    
    {name: 'Maryte', age: 88}, 
];

people.sort((a, b) => a.age - b.age);   //rikiuoja pagal amziu
console.log(people);

people.sort((a, b) => a.name.length - b.name.length);  // rikiuoja vardus pagal vardo ilgi
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : -1);    // rikiuoja vardus pagal abecele
console.log(people);