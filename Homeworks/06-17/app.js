// Sukurkite num kintamąjį ir priskirkite jam reikšmę 3. Parodykite šio kintamojo reikšmę ekrane, naudodami alert funkciją.
let num = 3;
alert (num);
// Sukurkite kintamuosius a = 10 ir b = 2. Ekrane parodykite jų sumą, skirtumą, daugybos ir padalijimo rezultatus.
let a = 10;
let b = 2;
document.write (`${a} + ${b} = ${a + b}`);
document.write ('<br>');
document.write (`${a} - ${b} = ${a - b}`);
document.write ('<br>');
document.write (`${a} x ${b} = ${a * b}`);
document.write ('<br>');
document.write (`${a} / ${b} = ${a / b}`);
document.write ('<br>');
// Sukurkite kintamuosius c = 15 ir d = 2. Susumuokite juos ir priskirkite kintamajam result. Parodykite result kintamojo vertę.
let c = 15;
let d = 2;
let result = (`${c+d}`);
document.write (`C + D = ${result}`);
document.write ('<br>');
// Sukurkite kintamuosius a = 17 ir b = 10. Atimkite kintamąjį b iš a ir priskirkite rezultatą kintamajam c. Tada sukurkite kintamąjį d, priskirkite jam reikšmę 7. Sudėkite kintamuosius c ir d ir priskirkite rezultatą kintamajam result.
a = 17;
b = 10;
c = (a - b);
d = 7;
result = c + d;
document.write (`Updated C + D = ${result}`);
document.write ('<br>');
// Sukurkite kintamąjį str ir priskirkite jam „Hello World!” reikšmę. Parodykite šio kintamojo reikšmę ekrane.
let str = 'Hello World!';
document.write(str)
document.write ('<br>');
// Sukurkite kintamuosius str1 = ‘Hello’ ir str2 = ‘World!’. Naudodami šiuos kintamuosius parodykite frazę „Hello World!“.
let str1 = 'Hello ';
let str2 = 'World!';
document.write(str1 + str2);
document.write ('<br>');
// Sukurkite kintamąjį name ir priskirkite jam savo vardą. Parodykite frazę „Hello, %name%!“.
let name = 'Benas';
document.write (str1 + name)
document.write ('<br>');
// Sukurkite kintamąjį age ir priskirkite jam savo amžių. Parodykite ‘I’m %age% old!’
let age = 30
document.write (`I am ${age} years old`)
document.write ('<br>');
// Paklauskite vartotojo vardo naudodamiesi prompt metodais. Su alert parodykite pranešimą „Your name %name%“ kur %name% - įvestas vardas.
let enter_name = prompt ('Your name')
document.write (`įvestas vardas ${enter_name}`)