/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
&& - and (ir) (prioritetas, kaip daugybos)
|| - or (arba)

*/

const isEven = true;
const isOdd = false;


console.log('&&---------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||---------------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Ar mergina eis i pasimatyma?');
const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

console.clear();

console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && false || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

console.clear();


// Pirma skaiciuoja && tik tada ||

console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || false && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

console.clear();


// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes
// ND: Kiek gavosi kombinaciju?

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && false && true && true);
console.log(false && true && true && true);
console.log(true && false && false && false);
console.log(true && false && false && true);
console.log(true && true && false && false);
console.log(false && false && false && false);
console.log(false && false && false && true);
console.log(false && false && true && true);
console.log(false && true && true && false);
console.log(false && true && false && false);
console.log(false && false && true && false);
console.log(true && false && true && false);
console.log(false && true && false && true);
console.log('--------------------------')
console.log(true && true && true || true);
console.log(true && true && true || false);
console.log(true && true && false || true);
console.log(true && false && true || true);
console.log(false && true && true || true);
console.log(true && false && false || false);
console.log(true && false && false || true);
console.log(true && true && false || false);
console.log(false && false && false || false);
console.log(false && false && false || true);
console.log(false && false && true || true);
console.log(false && true && true || false);
console.log(false && true && false || false);
console.log(false && false && true || false);
console.log(true && false && true || false);
console.log(false && true && false || true);
console.log('--------------------------')
console.log(true && true || true || true);
console.log(true && true || true || false);
console.log(true && true || false || true);
console.log(true && false || true || true);
console.log(false && true || true || true);
console.log(true && false || false || false);
console.log(true && false || false || true);
console.log(true && true || false || false);
console.log(false && false || false || false);
console.log(false && false || false || true);
console.log(false && false || true || true);
console.log(false && true || true || false);
console.log(false && true || false || false);
console.log(false && false || true || false);
console.log(true && false || true || false);
console.log(false && true || false || true);
console.log('--------------------------')
console.log(true || true || true || true);
console.log(true || true || true || false);
console.log(true || true || false || true);
console.log(true || false || true || true);
console.log(false || true || true || true);
console.log(true || false || false || false);
console.log(true || false || false || true);
console.log(true || true || false || false);
console.log(false || false || false || false);
console.log(false || false || false || true);
console.log(false || false || true || true);
console.log(false || true || true || false);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log(true || false || true || false);
console.log(false || true || false || true);
console.log('--------------------------')
console.log(true || true || true && true);
console.log(true || true || true && false);
console.log(true || true || false && true);
console.log(true || false || true && true);
console.log(false || true || true && true);
console.log(true || false || false && false);
console.log(true || false || false && true);
console.log(true || true || false && false);
console.log(false || false || false && false);
console.log(false || false || false && true);
console.log(false || false || true && true);
console.log(false || true || true && false);
console.log(false || true || false && false);
console.log(false || false || true && false);
console.log(true || false || true && false);
console.log(false || true || false && true);
console.log('--------------------------')
console.log(true || true && true || true);
console.log(true || true && true || false);
console.log(true || true && false || true);
console.log(true || false && true || true);
console.log(false || true && true || true);
console.log(true || false && false || false);
console.log(true || false && false || true);
console.log(true || true && false || false);
console.log(false || false && false || false);
console.log(false || false && false || true);
console.log(false || false && true || true);
console.log(false || true && true || false);
console.log(false || true && false || false);
console.log(false || false && true || false);
console.log(true || false && true || false);
console.log(false || true && false || true);
console.log('--------------------------')
console.log(true || true && true && true);
console.log(true || true && true && false);
console.log(true || true && false && true);
console.log(true || false && true && true);
console.log(false || true && true && true);
console.log(true || false && false && false);
console.log(true || false && false && true);
console.log(true || true && false && false);
console.log(false || false && false && false);
console.log(false || false && false && true);
console.log(false || false && true && true);
console.log(false || true && true && false);
console.log(false || true && false && false);
console.log(false || false && true && false);
console.log(true || false && true && false);
console.log(false || true && false && true);
console.log('--------------------------')
console.log(true && true || true && true);
console.log(true && true || true && false);
console.log(true && true || false && true);
console.log(true && false || true && true);
console.log(false && true || true && true);
console.log(true && false || false && false);
console.log(true && false || false && true);
console.log(true && true || false && false);
console.log(false && false || false && false);
console.log(false && false || false && true);
console.log(false && false || true && true);
console.log(false && true || true && false);
console.log(false && true || false && false);
console.log(false && false || true && false);
console.log(true && false || true && false);
console.log(false && true || false && true);

console.log(16*8);
