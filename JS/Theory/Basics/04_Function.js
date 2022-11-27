// 1 Function 

// greet('Vova')
// greet2('Vova')

// function greet(name) {
//     console.log('Hello -', name)
// }

// const greet2 = function greet2(name){
//     console.log('Hello2 -',name);
// }

// // greet('Vova')
// // greet2('Vova')

// // console.log(typeof greet)
// // console.dir(greet)

// 2 Anonymous Function
// let counter = 0
// const interval = setInterval(function() {
//     if(counter === 5){
//     clearInterval(interval) // clearTimeout
//     }else{
//         console.log(++counter)
//     }
// }, 1000)

// 3 Arrow Function

// function greet() {
//     console.log('Hello -')
// }

// const arrow = (name) =>{
//     console.log('Hello -', name)
// }

// const arrow2 = name => console.log('Hello -', name)

// arrow2('Vladimir')

// const pow2 = num => num**2

// console.log(pow2(5))

// 4 Default Options
// const sum = (a = 40, b = a*2)=> a + b

// console.log(sum(41,4));
// console.log(sum())

// function sumAll(...all) {
//     let result = 0
//     for(let num of all){
//         result +=num
//     }
//     return result
// }

// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)

// 5 Function Closures
// function createMember(name){
//     return function(lastName){
//         console.log(name + lastName)
//     }
// }

// const logWithLastName = createMember('Vladimir')
// console.log(logWithLastName(' Tereshonok'))
