let quadrado = function(x) {
    return x * x
}

console.log(quadrado(5))

// Função arrow (função de seta) é uma sintaxe mais curta para escrever funções em JavaScript. Elas são especialmente úteis para funções anônimas e callbacks.
let quadradoArrow = (x) => {
    return x * x
}

console.log(quadradoArrow(6))

//-------------------------------------------------------------------------------------------

parOuImpar = num => {
    if(num % 2 === 0) {
        console.log(`${num} é par`)
    } else {
        console.log(`${num} é ímpar`)
    }
}
parOuImpar2 = num => {
    num % 2 === 0 ? console.log('Par') : console.log('Ímpar')
}

parOuImpar(7)
parOuImpar2(1)