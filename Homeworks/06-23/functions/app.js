// Parasšykitė funkciją kuri grąžina stulpelį su lyginiais skaičiais nuo x iki x.
function evenNumbers (first, last) {
    let result = [];
    for (let i = first; i <= last; i++) {
        if (i % 2 == 0) {
            result.push(i);
        }
        return result
    }
}
console.log (evenNumbers(54, 78))

// Parasšykitė funkciją kuri patikrina ar duotas skaičius yra daugiau nei 3 ir mažiau nei 10
function moreLess (number) {
    if (number > 3 && number < 10) {
        return true;
    }
}
console.log (moreLess(11))
// Parasšykitė funkciją kuri grąžina teigiamų masyvo skaičių sumą