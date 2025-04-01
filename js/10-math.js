console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2); // Saknis is 2.

// abs --> absoliutine verte.
console.log('\nabs');
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt --> kubine saknis.
console.log('\ncbrt');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

// ceil --> lubos (apvalinimas i virsu).
console.log('\nceil');
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.5));
console.log(Math.ceil(8.0000001));

// floor --> grindys (apvalinimas i apacia).
console.log('\nfloor');
console.log(Math.floor(8));
console.log(Math.floor(8.5));
console.log(Math.floor(8.2));
console.log(Math.floor(8.99999992));
console.log(Math.floor(-8.99999992));

// round --> apvalinimas.
console.log('\nround');
console.log(Math.round(8));
console.log(Math.round(8.000001));
console.log(Math.round(8.2));
console.log(Math.round(8.499999));
console.log(Math.round(8.5));
console.log(Math.round(8.9));

// trunc --> apvalinimas.
console.log('\ntrunc');
console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.000001));
console.log(Math.trunc(4.999999));
console.log(Math.trunc(-8.99999));

// hypot --> skaiciuoja istrizaine
console.log('\nhypot');
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6));

// max --> randa didziausia reiksme.
console.log('\nmax');
console.log(Math.max(10, 2, 8, 4, 6));
console.log(Math.max[10, 2, 8, 4, 6]);
console.log(Math.max(-10, 2, 8, 4, 6));

// min --> randa maziausia reiksme.
console.log('\nmin');
console.log(Math.min(10, 2, 8, 4, 6));
console.log(Math.min(-10, 2, 8, 4, 6));

// pow --> kelimas laipsniu.
console.log('\npow');
console.log(Math.pow(2, 0)); // 2 ** 0;
console.log(Math.pow(2, 1));
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));
console.log(Math.pow(2, 6));
console.log(Math.pow(2, 7));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 9));
console.log(Math.pow(2, 10));

// sign --> grazina zenkla, 1 arba -1.
console.log('\nsign');
console.log(Math.sign(8)); 
console.log(Math.sign(-8)); 
console.log(Math.sign(0));
console.log(Math.sign(Infinity));  

const a = -825.256466;
if (Math.sign(a) === 1) {
    console.log(a);
} else {
    console.log(a * -1);
}

// sqrt --> kvadratine saknis
console.log('\nsqrt');
console.log(Math.sqrt(4), 4 ** 0.5);
console.log(Math.sqrt(9), 9 ** 0.5);
console.log(Math.sqrt(81), 81 ** 0.5);
console.log(Math.sqrt(2), 2 ** 0.5);
console.log(Math.sqrt(13), 13 ** 0.5);

// random --> 
console.log('\nrandomt');
console.log(Math.random());