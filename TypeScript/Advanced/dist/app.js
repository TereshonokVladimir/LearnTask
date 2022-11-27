"use strict";
// class Person {
//   constructor(private name: string) {}
// }
// const max = new Person('Maxim')
// const btn: Element = document.querySelector('#btn')!
// btn.addEventListener('click', () => {
//   console.log('Btn click');
// })
// =============
let anyFlag;
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo('I am log string');
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return;
}
