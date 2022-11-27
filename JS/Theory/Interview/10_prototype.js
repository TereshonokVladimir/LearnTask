// __proto__  ES6
// Object.getPrototypeOf()

// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says myay`);
// }

// const cat = new Cat('Cat','white')

// console.log(Cat.prototype);//Cat { voice: [Function] }
// console.log(cat);//Cat { name: 'Cat', color: 'white'}
// console.log(cat.__proto__ === Cat.prototype);//true
// console.log(cat.constructor);// [Function: Cat]
// // cat.voice()

// ==========
function Person() {}
Person.prototype.legs = 2 
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Vladimir'

// console.log('skin' in person);//true
// console.log(person.legs);// 2 
// console.log(person.eyes);//  underfiend
// console.log(person.name);// Vladimir

console.log(person.hasOwnProperty('name'));// true
console.log(person.hasOwnProperty('skin'));// false

// Object.create()
let proto = {year:2022}
const myYear = Object.create(proto)

// console.log(myYear.year);// 2022
proto = {year: 999}

proto.year = 2200

console.log(myYear.year);// 2200
// console.log(myYear.hasOwnProperty('year'));//false
// console.log(myYear.__proto__ === proto);//true
