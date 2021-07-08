// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arr = ['a', 'b', 'c'];
console.log (arr);
// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log (arr[0],arr[1],arr[2]);
// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let arr_2 = ['a', 'b', 'c', 'd']
console.log(arr_2[0],'+', arr_2[1], ',', arr_2[2], '+', arr_2[3]);
// Sukurkite masyvą su elementais 2, 5, 3, 9.
// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
let arr_3 = [2, 5, 3, 9];
console.log (arr_3[0] * arr_3[1], arr_3[2] * arr_3[3]);
// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let result = (arr_3[0] * arr_3[1] + arr_3[2] * arr_3[3]);
console.log (result);
// Daugialypiai masyvai
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let multiarr = [
        [1, 2, 3], [4, 5, 6], [7,8,9]
    ];
console.log (multiarr[1][0]);
// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arr_4 = [1, 2, 3];
let arr_5 = [4, 5, 6];
let multiarr_2 = arr_4.concat(arr_5);
console.log (multiarr_2);
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arr_6 = [1, 2, 3];
console.log (arr_6.reverse());
// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let arr_7 = [1, 2, 3];
    arr_7.push(4, 5, 6);
    arr_7.unshift(-1, -2, -3);
console.log (arr_7);
// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let arr_8 = ['html', 'css', 'js', 'php'];
console.log (arr_8[0], arr_8[arr_8.length - 1]);
// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let arr_9 = [3, 4, 1, 2, 7];
    arr_9.sort();
console.log (arr_9);
// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let arr_10 = [1, 2, 3, 4, 5];
arr_10.splice(3, 2);
console.log (arr_10);