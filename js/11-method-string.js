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

console.clear();

// repeat
console.log('\nrepeat');

const symbol = 'm';
const megaSymbol = symbol.repeat(10);
console.log(symbol);
console.log(megaSymbol);

function stringRepeat(text, count) {
    let result = '';

    for(let i = 0; i < Math.floor(count); i++) {
        result += text;
    }
    return result;
}

console.log(stringRepeat('rikiki-', 3.99999));
console.log(stringRepeat('apci ', 4));

// replace
console.log('\nreplace');

const summer = 'vasara'.replace('a', '-')
console.log(summer);


// chain - grandinele
const summer2 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer2);

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3);

const cloud = 'debeselis'.replace('ebe', '***');
console.log(cloud);

const template = 'VARDAS ejo i parduotuve pirkti DAIKTAS';
const name = 'Jonas';
const item = 'pomidoras';

const shop = template.replace('VARDAS', name).replace('DAIKTAS', item);

console.log(shop);

// replaceAll
console.log('\nreplaceAll');
console.log('Vasara');
console.log('Vasara'.replaceAll('a', '-'));

const template3 = 'VARDAS saunuolis. VARDAS grazuolis. VARDAS smalsuolis. VARDAS murzius.';
const multiName = template3.replaceAll('VARDAS', 'Petras');
console.log(multiName);

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));
console.log('ananasas'.replaceAll('na', ''));

// Labas rytas, Lietuva! - apskaiciuoti matomus simbolius
const hi = 'Labas rytas, Lietuva!';
const hiNormalSize = hi.replaceAll(' ', ''). length;

console.log(hiNormalSize);

// toUperCase
console.log('\ntoUperCase');
console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());
console.log('5dsfs58 sdf55; 4efef5ef55'.toUpperCase());

// toLowerCase
console.log('\ntoLowerCase');
console.log('LABAS'.toLowerCase());
console.log('lABAS'.toLowerCase());
console.log('5HGJHs58 GHf55; 4eFGH5GFGHJJ55'.toUpperCase());

// slice
console.log('\nslice');
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));
console.log('pomidoras'.slice(2, 5));
console.log('pomidoras'.slice(0, -1)); // nupjauna paskutine raide.
console.log('pomidoras'.slice(-4));
console.log('pomidoras'.slice(-6, -2));

// trim - pasalina tarpus is priekio ir is galo
console.log('\ntrim');
console.log('pomidoras'.trim());
console.log(`"${'pomidoras'.trim()}"`);
console.log(`"${'       pomidoras'.trim()}"`);
console.log(`"${'pomidoras     '.trim()}"`);
console.log(`"${'      pomidoras     '.trim()}"`);
console.log(`"${'    labas     rytas   '.trim()}"`);

console.log(`"${'    labas     rytas   '.trimEnd()}"`);
console.log(`"${'    labas     rytas   '.trimStart()}"`);

// split
console.log('\nsplit');

const t1 = 'zodis';
const t1Parts = t1.split();
const t1Parts2 = t1.split('o');
const t1Parts3 = t1.split('d');

console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2 = 'kultivatorius';
const t2Parts = t2.split('t');

console.log(t2Parts);

const t3 = 'Labas rytas Lietuva';
const t3Parts = t3.split(' ');

console.log(t3Parts);

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('d'));
console.log('duona'.split('a'));

console.log('ana'.split('a'));
console.log('vasara'.split('a'));
console.log('vasara'.split(''));

console.log(''.split(''));

// sakiniu kiekis
const t4 = 'Labas. Ka tu. Ka tu veiki.';
const sentenceCount = t4.split('.').length -1;
console.log(sentenceCount);

console.log('pomidoras'.split('dor'));
console.log('ananasas'.split('na'));

// charCodeAt
console.log(('\ncharCodeAt'));

console.log('A'.charCodeAt(0));
console.log('a'.charCodeAt(0));

if ('A' > 'a') {
    console.log('daugiau');
} else {
    console.log('maziau');
}


if ('labas' > 'iki') {
    console.log('daugiau');
} else {
    console.log('maziau');
}

const s1 = String.fromCharCode(65);
console.log(s1);

const s2 = String.fromCharCode(2600);
console.log(s2);

