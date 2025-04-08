let zodis = '';

if (4 > 2) {
    zodis = 'daugiau';
} else {
    zodis = 'maziau';
}

console.log(zodis);

let skaicius = 0;

if (7 <= 5) {
    skaicius = 7;
} else {
    skaicius = 5;
}

console.log(skaicius);

// klasuimas ? teigiama : neigiama
const word = 4 > 2 ? 'daugiau' : 'maziau';
console.log(word);

const number = 7 <= 5 ? 7 : 5;
console.log(number);

const years = 22;
const isAdult = years >= 18 ? 'suauges' : 'nesuauges';
console.log(isAdult);

const value = 7;
const type = typeof value === 'number' ? 'skaicius' : 'neskaicius';
console.log(type);


// visi skaiciai yra pozityvus
// isskyrus 0
if (0) {
    console.log('Taip');
} else {
    console.log('Ne');
}

// visi tekstai yra pozityvus
// isskyrus tuscia teksta
if ('') {
    console.log('Taip');
} else {
    console.log('Ne');
}

// visi array yra pozityvus
if ([]) {
    console.log('Taip');
} else {
    console.log('Ne');
}

// visi objektai yra pozityvus
if ({}) {
    console.log('Taip');
} else {
    console.log('Ne');
}

// undefined ir null yra negatyvus
if (undefined) {
    console.log('Taip');
} else {
    console.log('Ne');
}

