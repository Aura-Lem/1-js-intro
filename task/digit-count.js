function digitCount(n) {
    if (typeof n !== 'number') {
        return 'Reikalingas skaicius.';
    }
    // v1
   // if (n === Infinity || n === -Infinity || isNaN(n)) {
   //     return 'Reikalingas normalus skaicius.';
   // }
    // v2
    if (!isFinite(n)) {
        return 'Reikalingas normalus skaicius.';
    }
    // '' + n ---> '' + n  = '5'
    const numberAsString = '' + n;
    let count = numberAsString.length;
    if (n % 1 !== 0)  {
        count --;
    }
    if (n < 0) {
        count--;
    }
    return count;
}

console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('asdfg'));
console.log(digitCount('2554655'));
console.log(digitCount(true));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(digitCount));
console.log(digitCount(null));

console.log(digitCount(Infinity));
console.log(digitCount(-Infinity));
console.log(digitCount(NaN));

console.log(digitCount(5));
console.log(digitCount(159));
console.log(digitCount(135554));
console.log(digitCount(5.5));
console.log(digitCount(-5));
console.log(digitCount(-159));
console.log(digitCount(-135554));
console.log(digitCount(-5.5));

//console.log(digitCount(1000000000000000000000));