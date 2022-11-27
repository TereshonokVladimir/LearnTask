// 1 variable
// const name = 'Vladimir' //string
// const lastname = 'Tereshonok'
// const age = 22 // number
// const isProgrammer = true //boolean
// const _private = 'active'
// console.log(firstName)
// console.log(lastname)
// console.log(age)
// console.log(isProgrammer)

// 2 mutation
// console.log('Name person:' + firstName + '., age person: ' + age)
// alert('Name person:' + firstName + '., age person: ' + age)
// const lastname = prompt('Enter name')
// alert(firstName + ' ' + lastname)

//3 OperatorS
// const currentYear = 2022
// const birthYear = 2000
// const age = currentYear - birthYear
// console.log(age)
// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c +=a
// c -=a
// c *=a
// c /=a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// // console.log(currentYear++)
// console.log(++currentYear)
// console.log(currentYear)
// console.log(--currentYear)

// 4 data type

// const isProgrammer = true
// const name = 'Vladimir'
// const age = 22
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) //!object
// console.log(null)

// 5 operator precedence
// const fullAge = 22
// const birthYear = 2000
// const currentYear = 2022

// // > < >= <=
// const isFullYear = currentYear - birthYear >= fullAge

// 6 conditional statements
// const courseStatus = 'pending' // ready,fail,pending

// if (courseStatus === 'ready'){
//     console.log('Course was ready')
// }else if (courseStatus === 'pending'){
//     console.log('Course in process')
// }else{
//     console.log('Cours wrong')
// }

// const isReady = true 

// if(isReady){
//     console.log('All done')
// }else{
//     console.log('Not at all')
// }

// isReady ? console.log('All done') : console.log('Not at all')

// const num1 = 42;
// const num2 = '42';

// console.log(num1 == num2)
// console.log(num1 === num2)

// 7 boolean logic

// 8 function

// function calcAge(year){
//     return 2022 - year
// }
// // console.log(calcAge(2000))
// // console.log(calcAge(2001))
// // console.log(calcAge(2002))
// // console.log(calcAge(1996))

// function logInfoAbout(name, year){
//     const age = calcAge(year)
//     if(age>0){
//         console.log('person '+ name +' age is ' + age)
//     }else{
//         console.log('So it`s Future')
//     }
// }
// logInfoAbout('Vladimir', 2000)
// logInfoAbout('Vladimir', 2023)

// 9 Array
// const cars = ['Mazda','Mersedec','Ford']
// // const cars = new Array('Mazda','Mersedec','Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])

// cars[0] = 'Porshe'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Cycle
// const cars = ['Mazda','Mersedec','Ford']

// // for(let i = 0;i < cars.length; i++){
// //     const car = cars[i]
// //     console.log(car)
// // }

// for(let car of cars){
//     console.log(car)
// }

// 11 Object
const person = {
    firstName: 'Vladimir',
    lastName: 'Tereshonok',
    year: 2000,
    languages: ['Ru','En','Ua'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()