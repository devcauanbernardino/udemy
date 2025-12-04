//destructuring
//Tira valores de dentro de uma estrutura, array ou objeto

//contexto de array

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Melancia']
// let a = frutas[0]
// let b = frutas[1]
// let c = frutas[2]
// console.log(a)

// let [ a, b ] = frutas
let [a, b, c, d, e = 'Banana'] = frutas
console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Melancia'], ['Jose', 'Maria']]
let [[ , , p], [ , m]] = coisas
console.log(m, p)



