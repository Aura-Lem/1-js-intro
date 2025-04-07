/*
Funkcija gauna sakini, kuris atrodo taip:
"Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA."
Funkcijos darbas yra grazinti teisingai perrasyta sakini.
T.y. reikia istaisyti vardu rasyma.
pvz.: "Siuo metu klaseje yra: Jonas, Maryte, Petras, Ona."
*/

/*
- atsiskiriame vardus is originalaus teksto
- konvertuojame teksta i mazasias raides
- issiskaidyti invidualius vardus i masyva
- ciklas eina per individualius vardus
    - pasiima pirma raide
    - ja padidina
    - apjungia i galutini normalu varda
- pagaminame galutini reikiama sakini
*/

function correctSentence(text) {
    const parts = text.split(': ');  // gaunamas masyvas su dviem kintamaisiais
    const names = parts[1].slice(0, -1).toLowerCase().split(', '); // pasalina taska, pakeicia raides mazosiomis, isskirsto vardus

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);
        const newName = firstLetter + restName;
        // const newName = name[o].toUpperCase() + name.slice(1);
        names[i] = newName;
    }

    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.'))