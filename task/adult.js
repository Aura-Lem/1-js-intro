/* 
Reikalinga funkcija, kuri gauna vartotojo amžių (metais) ir atitinkamai grąžina žodį:
- suaugęs
- vaikas
Amžiaus ribos kriterijus: >= 18 metų.
*/

function isAdult(age) {
   if (age >= 18) {
    return 'suauges';
   } else {
    return 'vaikas';
   }
}

console.log(isAdult(99), '-->', 'suauges');
console.log(isAdult(18), '-->', 'suauges');
console.log(isAdult(17), '-->', 'vaikas');
console.log(isAdult(1), '-->', 'vaikas');