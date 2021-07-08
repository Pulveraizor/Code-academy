// For and While
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.
for (let i = 0; i <= 100; i++) {
    console.log('task1 for: '+i);
}

let min = 0,
    max = 100;

while (min <= max) {
    console.log ('task1 while: ' + min);
    min++;
}

// Atspausdinkite skaičių stulpelį nuo 11 iki 33.
for (let i = 11; i <= 33; i++) {
    console.log('task2 for: ' + i);
}
min = 11;
max = 33;

while (min <= max) {
    console.log ('task2 while: ' + min);
    min++;
}

// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.
min = 0;
max = 100;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log ('task3 for:' + i)
    }
}

while (min <= max){
    if (min % 2 === 0)
        {
            console.log('task3 while: ', min);
        }
    min++;
    }
// Naudodami ciklą parodykite sumą nuo 1 iki 100.
let sum = 0;
min = 1;
while (min <= max) {
    sum += min;
    min++;
}
console.log ('task4 while: ' + sum)

sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log ('task4 for: ' + sum);

// For ir masyvai
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length - 1; i++)
    {
        console.log('Array elements: ', arr[i]);
    }

// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
let result = 0;

for (let i = 0; i < arr.length; i++)
{
    result += arr[i];
}
console.log (result)

function eventNumbers(start, end) {
    let result = [];

    for (let i = start; i <= end; i++)
        if (i % 2 == 0) {
            result.push(i);
        }
    return result;
}
console.log (result)

