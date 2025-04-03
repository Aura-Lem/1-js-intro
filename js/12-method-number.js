/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14), Number.isFinite(-3.14));
console.log(isFinite(Infinity), Number.isFinite(Infinity));
console.log(isFinite(NaN), Number.isFinite(NaN));
console.log(isFinite('gfdhugi'), Number.isFinite('gfdhugi'));
console.log(isFinite(true), Number.isFinite(true));
console.log(isFinite([]), Number.isFinite([]));
console.log(isFinite({}), Number.isFinite({}));

// isInteger nustato ar skaicius yra sveikasis.
console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger('dfHDfh'));
console.log(Number.isInteger(true));

console.log(Number.isNaN(5), isNaN(5));
console.log(Number.isNaN(3.14), isNaN(3.14));
console.log(Number.isNaN(Infinity), isNaN(Infinity));
console.log(Number.isNaN(NaN), isNaN(NaN));
console.log(Number.isNaN('fgsfhjs'), isNaN('fgsfhjs'));
console.log(Number.isNaN([]), isNaN([]));
console.log(Number.isNaN({}), isNaN({}));

// pakeicia string tipo i number tipa. 
const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

console.log(parseInt('65'));
console.log(parseInt('65.3'));
console.log(parseInt('-65'));
console.log(parseInt('labas'));  // --> NaN
console.log(parseInt('labas111')); // --> NaN
console.log(parseInt('222labas')); // --> 222
console.log(parseInt('222labas3333'));  // --> 222
console.log(parseInt(true));  // --> NaN
console.log(parseInt(['222', '333'])); // --> 222
console.log(parseInt('222labas333'.replace('labas', ''))); // --> 222333
console.log(parseInt('222labas333'.split('labas'))); // --> [222, 333]

console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('55.66labas')); // --> 55.66
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66.77')); // --> 55.66
console.log(parseFloat('-5-5')); // --> -5
console.log(parseFloat('--55')); // --> NaN
console.log(parseFloat('+5+5')); // --> 5

const a = 12.3456789;
console.log(typeof a);
console.log(typeof typeof a);   // a = string; typeof a = number, o number reiksme yra stringas.

const b = a.toFixed(4);
console.log(b);
console.log(typeof b); // b = string.

const c = parseFloat(b);
console.log(c);
console.log(typeof c);  // number

console.log(12.3456789.toFixed(7));
console.log(12.3456789.toFixed(6));
console.log(12.3456789.toFixed(5));
console.log(12.3456789.toFixed(4));
console.log(12.3456789.toFixed(3));
console.log(12.3456789.toFixed(2));
console.log(12.3456789.toFixed(1));
console.log(12.3456789.toFixed(0));

console.log(3.14.toFixed(0));
console.log(3.14.toFixed(1));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));

