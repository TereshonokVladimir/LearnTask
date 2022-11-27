// Let 

// let a = 'Variable a'
// let b = 'Variable b'
// // block scope
// {
//     a = 'New Variable A'
//     let b = 'Local Variable B'
//     console.log('Scope A', a);//New Variable A
//     console.log('Scope B', b);//Local Variable B
//     console.log('Scope C', c)//Error
//     let c = 'Something'
// }
// console.log('A:',a);//New Variable A
// console.log('B:',b);//Variable b

// Const 
const PORT = 8080
// PORT = 2000 // Error assigment to constant variable
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
console.log(array);//['Javascript', 'is', 'Awesome','!']
array[0] = 'JS'
console.log(array);//['JS', 'is', 'Awesome','!']
array = ''
console.log(array);//Error

const obj = {}
obj.name = 'Vladimir'
obj.age = 22

console.log(obj);//{name: 'Vladimir', age: 22}
obj.age = 21
console.log(obj);//{name: 'Vladimir', age: 21}
delete obj.name
console.log(obj);//{age: 21}
obj = 42 // Error