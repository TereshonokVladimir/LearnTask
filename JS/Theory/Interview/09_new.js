function Cat(color, name){
    this.color = color
    this.name = name
}

// const cat = new Cat('black', 'CAT')
// console.log(cat);// Cat { color: 'black', name: 'CAT'}

// function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'Cat')
// console.log(cat);

// const cat = Cat()
// console.log(cat);// underfiend

const cat = new Cat()
console.log(cat);// Cat {color: underfiend, name: underfiend }