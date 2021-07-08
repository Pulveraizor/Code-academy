// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let color = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna',
}
for (let key in color) {
    console.log (key, '-', color[key])
}
// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
let people = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300,
}
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
for (let key in people) {
    console.log (key, '-', people[key], 'EUR Atlyginimas')
}
// Sukurkite objektą su savaitės dienomis.
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios
// (1 -> pirmadienis ir t.t.).
let weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}
// Parodykite dabartinę savaitės dieną.
let date = new Date();
let today = weekdays[date.getDay()];
console.log(today);
// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris.
let day = date.getDay();
console.log(day);
// Atspausdinkite savaitės dieną naudojant sita kintamajį.
console.log (weekdays[day]);
// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}.
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world',
}
// Parodykite žodį jQuery.
console.log (obj.js[0]);
// Sukurkite objektą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai atitinkamai.
let weeknames = {
    lt: ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
console.log (weeknames.lt[0], weeknames.en[2]);
// Sukurkite kintamsios lang ir day (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną

let langEn = weeknames.en
let langLt = weeknames.lt

console.log(langEn[day - 1])
console.log(langLt[day - 1])