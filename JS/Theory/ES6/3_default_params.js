const defaultb = 30
const getDefault = c => c * 2 
function compute(a = 10, b = defaultb(a)) {
    return a + b
}

console.log(compute())