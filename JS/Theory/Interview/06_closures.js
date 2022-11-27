// function sayHelloTo(name){
//     const message = 'Hello ' + name

//     return function() {
//         console.log(message);
//     }
// }

// const helloToElena = sayHelloTo('Elena')
// const helloToIgor = sayHelloTo('Igor')
// console.log(helloToElena);//[Function]
// console.log(helloToElena());//Hello Elena , underfiend cause no return in function
// helloToElena()//Hello Elena
// helloToIgor()//Hello Igor

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function(){
            console.log(fw.join(' '));
        },
        add: function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
// console.log(manager);//{ print: [Function: print], add [Function: add] }
// console.log(fw);//Error
manager.print()// Angular React
manager.add('VueJS')

manager.print()// Angular React VueJS

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

// for(var i = 0; i < fib.length; i++){
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500)
// }//fib[6] = underfiend * 6 


// for(let i = 0; i < fib.length; i++){
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`);
//     }, 1500)
// }// all is ok

for(var i = 0; i < fib.length; i++){
    (function(j){
        setTimeout(function () {
            console.log(`fib[${i}] = ${fib[i]}`);
        }, 1500)
    })(i)
}
