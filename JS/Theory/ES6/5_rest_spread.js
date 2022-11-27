function average(a, b, ...args) {
    return args.reduce((acc, i) => acc += i, 0 )/ args.length
}

// console.log(average(1, 2, 3, 4, 5));

// Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(...array);
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// const fib = [1, ...array]
// console.log(fib)

// Destructuring

const array = [1, undefined, 3, 5, 8, 13]

// const a = array[0]
// const b = array[1]

// const [a, b = 42, ...c] = array
// console.log(a, b, c);

// const [a,, c] = array
// console.log(a, c);

// Object
const address = {
    country: 'Ukraine',
    city: 'Dnepr',
    // street: 'Mira',
    concat: function() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

// const {city, country, street = 'Marks', concat: addressConcat} = address

// console.log(street);
// console.log(addressConcat.call(address));

const {city, ...rest} = address
console.log(city);
console.log(rest);

const newAddress = {...address, street: 'Marks'}

console.log(newAddress);

// console.log(address.concat());
