let age = prompt('iveskite savo gimio metus');
let year = new Date();
let result = (year.getFullYear());
document.write(`You are ${result - age} years old`);