/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

console.log('Labas');
console.log('Labas'[0]);

const text = 'Pomidoras';
console.log(text[0]);
console.log(text[text.length -1]);

// at 
console.log('--', text.at(0));
console.log('--', text.at(1));
console.log('--', text.at(2));
console.log('--', text.at(-1));
console.log('--', text.at(-2));
console.log('--', text.at(-3));

// includes
console.log('\nincludes');
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('v'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('A'));

// startsWith randa pirma raide.
console.log('\nstartsWith');
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Po'));
console.log('Pomidoras'.startsWith('Pomi'));
console.log('Pomidoras'.startsWith('Pomidoras'));
console.log('Pomidoras'.startsWith('doras'));

// endsWith randa paskutine raide.
console.log('\nendsWith');
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('Pom'));
console.log('Pomidoras'.endsWith('s'));
console.log('Pomidoras'.endsWith('ras'));
console.log('Pomidoras'.endsWith('doras'));
console.log('Pomidoras'.endsWith('Pomidoras'));

// indexOf nurodo raides vieta zodyje.
console.log('\nindexOf');
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('p')); // -1 nurodo, kad raides zodyje nerado.

console.log('Pomidoras'.indexOf('o', 0));
console.log('Pomidoras'.indexOf('o', 2));

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 2));

const k = 'Kulverstukas';
console.log(k.indexOf('u'));
console.log(k.indexOf('u', 2));
console.log(k.indexOf('u', k.indexOf('u') + 1));