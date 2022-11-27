// const person = {
//     surname: 'Stark',
//     knows: function(what, name){
//         console.log(`You ${what} knows, ${name} ${this.surname}`);//this === person
//     }
// }

// const john = { surname: 'Snow'}

// person.knows('All', 'Brann')// You All knows, Brann Stark
// person.knows.call(john, 'nothing', 'John')// You nothing knows, John Snow 
// person.knows.apply(john, ['nothing', 'John'])// You nothing knows, John Snow 
// person.knows.call(john, ...['nothing', 'John'])// You nothing knows, John Snow 

// person.knows.bind(john, 'nothing', 'John')()// You nothing knows, John Snow 
// //or
// const bound = person.knows.bind(john, 'nothing', 'John')
// bound()// You nothing knows, John Snow 

// ======

function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this);
}

const elena = new Person('Elena', 20)// Person {name: 'Elena' , age: 20 }

// ======= Explicit

// function logThis(){
//     console.log(this);
// }

// const obj = {num: 42}

// logThis.apply(obj)//{ num: 42 }
// logThis.call(obj)//{ num: 42 }
// logThis.bind(obj)()//{ num: 42 }

// // ===== Implicit

// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this);
//     }
// }

// animal.logThis()// {legs: 4, logThis: [Function: logThis] }

// String Arrow

function Cat(color){
    this.color = color
    console.log('This', this);
    ( () => console.log('Arrow this', this)) ()
}

new Cat('red')// Arrow this Cat { color: red }