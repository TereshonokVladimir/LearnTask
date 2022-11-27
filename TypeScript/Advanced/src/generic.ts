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

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Vladimir'}, {age: 22})

const merged2 = mergeObjects({model:'Ford'}, {year: 2010})
// console.log(merged.name)
// console.log(merged.age)


// =================

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T):{value: T, count: string} {
  return {
    value,
    count: `${value.length} symbol in this object`
  }
}

// console.log(withCount('Hello Typescript'))
// console.log(withCount(['I', 'am', 'Array']))
// // console.log(withCount(20))
// console.log(withCount({length: 20}))

// ==================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name:'Vladimir',
  age:'22',
  job: true
}

// console.log(getObjectValue(person,'name'))
// console.log(getObjectValue(person,'age'))
// console.log(getObjectValue(person,'phone'))


// ===================

class Collection<T extends string|number|boolean> {
  // private _items: T[] = []

  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) { 
    this._items = this._items.filter(i => i !== item)
  }

  get items() {
    return this._items
  }
}

// const strings = new Collection(['I', 'Am', 'Strings'])
// strings.add('!')
// strings.remove('I')
// console.log(strings.items)

// const numbers = new Collection([42, 22, 45, 65])
// numbers.add(76)
// numbers.remove(22)
// console.log(numbers.items)

// const objs = new Collection([{a:1}, {b:2}])
// objs.remove({b:2})
// console.log(objs.items)


// ==================

interface Car {
  model: string
  year: number
}

function createAndValidateCars(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if(model.length > 3) {
    car.model = model
  }

  if(year > 2000){
    car.year = year
  }
  return car as Car
}

///

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift()
// cars[1]

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'