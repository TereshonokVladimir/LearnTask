const symbol = Symbol('demo')
const other = Symbol('demo')

console.log(symbol);
console.log(other);

console.log(symbol === other);

const obj = {
    name: 'Helen',
    demo:'DEMO',
    [symbol]: 'meta'
}

for (const key in obj) {
    console.log(key);
}

console.log(obj.demo);
console.log(obj[symbol]);

