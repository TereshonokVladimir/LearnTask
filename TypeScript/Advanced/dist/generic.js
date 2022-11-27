"use strict";
// const cars: string[] = ['ford','audi']
// const cars2: Array<string> = ['ford','audi']
// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     console.log('Promise resolved')
//   }, 2000)
// })
// promise.then(data => {
//   console.log(data)
// })
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Vladimir' }, { age: 22 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `${value.length} symbol in this object`
    };
}
// console.log(withCount('Hello Typescript'))
// console.log(withCount(['I', 'am', 'Array']))
// // console.log(withCount(20))
// console.log(withCount({length: 20}))
// ==================
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Vladimir',
    age: '22',
    job: true
};
// console.log(getObjectValue(person,'name'))
// console.log(getObjectValue(person,'age'))
// console.log(getObjectValue(person,'phone'))
// ===================
class Collection {
    // private _items: T[] = []
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCars(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
///
const cars = ['Ford', 'Audi'];
// cars.shift()
// cars[1]
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrari'
