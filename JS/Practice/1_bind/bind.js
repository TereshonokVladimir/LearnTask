const person = {
    name: 'Vladilen'
}

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email:${email}`);
}

// Demo
// info.bind(person)('12345', 'v@mail.ua')
// info.bind(person, '12345')('v@mail.ua')
// info.bind(person, '12345', 'v@mail.ua')()

// 1 Easy

// function bind(fn, context, ...rest) {
//     return fn.bind(context, ...rest)
// }

// 2 Without built-in methods
// function bind(fn, context, ...rest) {
//     return function () {
//         const uniqId = Date.now.toString

//         context[uniqId] = fn

//         const result = context[uniqId](...rest)

//         delete context[uniqId]
        
//         return result
//     }
// }

bind(info, person)('12345', 'v@mail.ua')
bind(info, person, '12345')('v@mail.ua')
bind(info, person, '12345', 'v@mail.ua')()

console.log(person);