/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

function sum(a, b) {
    return a + b;
}


console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['a', 'b']);
console.log(typeof sum);
console.log(typeof undefined)
console.log(typeof null);
console.log(typeof {});

const a = null;
if (a === null) {
  console.log('NULL');
}


const b = [];
if (Array.isArray(b)) {
   console.log('ARRAY');
}

const c = 5;
if (Array.isArray(c)) {
   console.log('ARRAY');
} else {
    console.log('ne arejus');
}