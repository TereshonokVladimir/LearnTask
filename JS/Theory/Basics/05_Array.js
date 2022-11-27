// Array

const cars = ['Mazda','Ford','BMW','Mercedes']
const people = [
    {name: 'Vladimir', budget:4200},
    {name: 'Elena', budget:3500},
    {name: 'Victoria', budget:1700}
]

const fib = [1, 1, 2, 3, 5, 8, 13, 21]

// console.log(cars)

// Method
// cars.push('Porshe')
// console.log(cars)
// cars.unshift('Lada')
// console.log(cars)
// const firstCar = cars.shift()
// console.log(cars)
// console.log(firstCar)
// const lastCar = cars.pop()
// console.log(cars)
// console.log(lastCar)

// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)
let findedPerson
for (const person of people) {
    if(person.budget === 3500){
        findedPerson = person
    }
}
console.log(findedPerson)

// const index = cars.indexOf('BMW')

// cars[index] = 'Porshe'
// console.log(cars)
// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// const person = people.find(function (person) {
//     return person.budget === 3500
// })
// console.log(person)

// const person = people.find(person => person.budget === 3500)
// console.log(person);

// const upperCaseCars = cars.map(car =>{
//     return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(filteredNumbers)
// console.log(upperCaseCars)
// console.log(cars)

// console.log(cars.includes('Mazda'));
// console.log(cars.includes('mazda'));


// Task1
// const text = 'Hello, we learn JS'
// // const reverseText = text.split(',')
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// const cars = ['Mazda','Ford','BMW','Mercedes']
// const people = [
//     {name: 'Vladimir', budget:4200},
//     {name: 'Elena', budget:3500},
//     {name: 'Victoria', budget:1700}
// ]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    },0)
console.log(allBudget);