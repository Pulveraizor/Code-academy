// TASK 1 //////////////////////////
let btn_1 = document.querySelector('#h_w');

btn_1.addEventListener('click', greeting);

function greeting () {
    alert('Hello World!');
}

// TASK 2 /////////////////////
let btns = document.querySelectorAll('button'),
    textInput_1 = document.querySelector('#task_2');

for (let a of btns) {
    if (a.textContent == 'To Upper Case') {
        a.addEventListener('click', function () {
            let textInput_1Value = textInput_1.value;
            let textOutput = textInput_1Value.toUpperCase();
            textInput_1.value = textOutput;
        })
    } else if (a.textContent == 'To Lower Case') {
        a.addEventListener('click', function () {
            let textInput_1Value = textInput_1.value;
            let textOutput = textInput_1Value.toLowerCase();
            textInput_1.value = textOutput;
        })
    } else if (a.textContent == 'First Upper Case') {
        a.addEventListener('click', function () {
            let textInput_1Value = textInput_1.value;
            let symbol_1 = textInput_1Value[0].toUpperCase();
            let sym_rem = textInput_1Value.slice(1);
            textInput_1.value = symbol_1 + sym_rem;
        })
    } else if (a.textContent == 'First Lower Case') {
        a.addEventListener('click', function () {
            let textInput_1Value = textInput_1.value;
            let symbol_1 = textInput_1Value[0].toLowerCase();
            let sym_rem = textInput_1Value.slice(1);
            textInput_1.value = symbol_1 + sym_rem;
        })
    }
}

// TASK 3 //////////////////////

let inputEmail = document.querySelector('#exampleInputEmail1'),
    inputTel = document.querySelector('#phone'),
    emailError = document.querySelector('#emailerr'),
    phoneError = document.querySelector('#phoneerr');

function showerror() {
    emailError.style.display = 'block';
    phoneError.style.display = 'block';
}
// showerror();

for (let a of btns) {
    if (a.textContent == 'Save') {
        a.addEventListener('click', function () {
            let b = inputEmail.value;
            if (b == '') {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        })
    }
    if (a.textContent == 'Save') {
        a.addEventListener('click', function () {
            let c = inputTel.value;
            if (c == '') {
                phoneError.style.display = 'block';
            } else {
                phoneError.style.display = 'none';
            }
        })
    }
}

//TASK 4 ////////////////////////////////

let block = document.querySelector('#block'),
    unBlock = document.querySelector('#unblock'),
    inputBl = document.querySelector('#inpbl');

if (block) {
    block.addEventListener ('click', function() {
        inputBl.setAttribute('disabled', '');
    })
}
if (unBlock) {
    unBlock.addEventListener ('click', function() {
        inputBl.removeAttribute('disabled');
    })
}

// TASK 5 //////////////////////////

function restore() {
    document.body.style.cursor = 'default';
    text.style.color = null;
    qBorder.style.borderColor = null;
}

function change_to_cross() {
    document.body.style.cursor = 'crosshair';
}
function change_to_wait() {
    document.body.style.cursor = 'wait';
}
function change_to_text() {
    document.body.style.cursor = 'text';
}

let text = document.getElementById('test_text')

function text_color_red () {
    text.style.color = 'red';
}
function text_color_green () {
    text.style.color = 'green';
}
function text_color_blue () {
    text.style.color = 'blue';
}

let qBorder = document.getElementById('quote_border')

function border_red () {
    qBorder.setAttribute('style', 'border:3px solid red !important');
}
function border_green () {
    qBorder.setAttribute('style', 'border:3px solid green !important');
}
function border_blue () {
    qBorder.setAttribute('style', 'border:3px solid blue !important');
}