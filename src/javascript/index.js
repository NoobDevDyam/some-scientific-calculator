import parse from "./parse.js";
import evaluate from "./evaluate.js";
//buttons
const karatBtn = document.querySelector('#karat');
const logBtn = document.querySelector('#log');
const sinBtn = document.querySelector('#sin');
const cosBtn = document.querySelector('#cos');
const tanBtn = document.querySelector('#tan');
const arcsinBtn = document.querySelector('#arcsin');
const arccosBtn = document.querySelector('#arccos');
const arctanBtn = document.querySelector('#arctan');
const sqrtBtn = document.querySelector('#sqrt');
const number7Btn = document.querySelector('#seven');
const number8Btn = document.querySelector('#eight');
const number9Btn = document.querySelector('#nine');
const delBtn = document.querySelector('#del');
const clearBtn = document.querySelector('#clear');
const number4Btn = document.querySelector('#four');
const number5Btn = document.querySelector('#five');
const number6Btn = document.querySelector('#six');
const multiplicationBtn = document.querySelector('#times');
const divisionBtn = document.querySelector('#divide');
const piBtn = document.querySelector('#pi');
const number1Btn = document.querySelector('#one');
const number2Btn = document.querySelector('#two');
const number3Btn = document.querySelector('#three');
const addBtn = document.querySelector('#add');
const minusBtn = document.querySelector('#minus');
const lnBtn = document.querySelector('#ln');
const number0Btn = document.querySelector('#zero');
const periodBtn = document.querySelector('#period');
const leftParenthesisBtn = document.querySelector('#leftp');
const rightParenthesisBtn = document.querySelector('#rightp');
const cbrtBtn = document.querySelector('#cbrt');
const calculateBtn = document.querySelector('#calculate');
karatBtn.onclick = function () {
    addText(' ^ ');
};
logBtn.onclick = function () {
    addText(' log( ');
};
sinBtn.onclick = function () {
    addText(' sin( ');
};
cosBtn.onclick = function () {
    addText(' cos( ');
};
tanBtn.onclick = function () {
    addText(' tan( ');
};
sqrtBtn.onclick = function () {
    addText(' sqrt( ');
};
arcsinBtn.onclick = function () {
    addText(' arcsin( ');
};
arccosBtn.onclick = function () {
    addText(' arccos( ');
};
arctanBtn.onclick = function () {
    addText(' arctan( ');
};
number7Btn.onclick = function () {
    addText('7');
};
number8Btn.onclick = function () {
    addText('8');
};
number9Btn.onclick = function () {
    addText('9');
};
delBtn.onclick = function () {
    removeText();
};
clearBtn.onclick = function () {
    clearText();
};
number4Btn.onclick = function () {
    addText('4');
};
number5Btn.onclick = function () {
    addText('5');
};
number6Btn.onclick = function () {
    addText('6');
};
multiplicationBtn.onclick = function () {
    addText(' * ');
};
divisionBtn.onclick = function () {
    addText(' / ');
};
piBtn.onclick = function () {
    addText(' π ');
};
number1Btn.onclick = function () {
    addText('1');
};
number2Btn.onclick = function () {
    addText('2');
};
number3Btn.onclick = function () {
    addText('3');
};
addBtn.onclick = function () {
    addText(' + ');
};
minusBtn.onclick = function () {
    addText(' - ');
};
lnBtn.onclick = function () {
    addText(' ln( ');
};
number0Btn.onclick = function () {
    addText('0');
};
periodBtn.onclick = function () {
    addText('.');
};
leftParenthesisBtn.onclick = function () {
    addText(' ( ');
};
rightParenthesisBtn.onclick = function () {
    addText(' ) ');
};
cbrtBtn.onclick = function () {
    addText(' cbrt ');
};
calculateBtn.onclick = function () {
    calculate();
};
function clearText() {
    const inputString = document.querySelector('#inputString');
    const outputString = document.querySelector('#outputString');
    const postfixString = document.querySelector('#postfixString');
    inputString.innerHTML = '';
    outputString.innerHTML = '';
    postfixString.innerHTML = '';
}
function removeText() {
    const inputString = document.querySelector('#inputString');
    const input = inputString.innerHTML;
    inputString.innerHTML = input.substring(0, input.length - 1);
}
function addText(text) {
    const inputString = document.querySelector('#inputString');
    inputString.innerHTML += text;
}
function calculate() {
    parse();
    evaluate();
}
