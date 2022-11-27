// null, underfiend, boolean, number, string, object, symbol

// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'Javascript'); // '',"",``
// console.log(typeof undefined);
// console.log(typeof Math);
// console.log(typeof Symbol('JS'));
// console.log(typeof null);
// console.log(typeof function() {});
// console.log(typeof NaN);

// Cast
// let language = 'Javascript'

// if(language){
//     console.log('The best language is: ', language);
// }

// '', 0, null, underfiend, NaN, false
// console.log(Boolean(''));
// console.log(Boolean('Hello'));
// console.log(Boolean(''));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function() {}));

// String and number
// console.log(1 + '2'); // string 12
// console.log('' + 1 + 0); // string 10
// console.log('' - 1 + 0); // nubmber -1
// console.log('3' * '8'); // number 24
// console.log(4 + 10 + 'px'); // string 14px
// console.log('px' + 5 + 10); // string px510
// console.log('42' - 40); // 2
// console.log('42px' - 2); // NaN
// console.log(null + 2); // 2
// console.log(underfiend + 42); // NaN

// == vs ===

// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(underfiend == null); // true 
// console.log(underfiend === null); // false

// console.log('0' == false);
// console.log('0' == 0);
// console.log(0 === 0);// all true

// ======
console.log(false == '');// true
console.log(false == []);// true 
console.log(false == {});// false
console.log('' == 0);// true
console.log('' == []);// true
console.log('' == {});// false
console.log(0 == []);// true
console.log(0 == {});// false
console.log(0 == null);// false

