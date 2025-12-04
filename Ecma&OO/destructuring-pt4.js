//array
let arr = [10, 20, 30, 40]

let [ a, ...rest ] = arr

console.log(a, rest)

//objeto
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

let { x, ...rest2 } = obj

console.log(a, rest2)