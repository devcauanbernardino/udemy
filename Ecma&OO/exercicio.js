const somarTudo = (...numeros) => {
    let total = 0
    numeros.forEach(valor => {
        total += valor
    })
    return total
}

console.log(somarTudo(3, 4, 6, 8))

const letras = ['A', 'B', 'C']
console.log(...letras)

let moto = {
    modelo: 'Tenere',
    cc: 700,
}

let a = {...moto}
console.log(a)