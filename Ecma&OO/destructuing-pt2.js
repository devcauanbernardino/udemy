let produto = {
    descricao: 'Notebook',
    preco: 2200,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

// let { descricao, preco } = produto
// console.log(descricao, preco)

// let { descricao: d, preco: p } = produto
// let { descricao: d, preco: p, desconto = 5 } = produto
// console.log(d, p, desconto)

let { detalhes: {fabricante, modelo} } = produto
console.log(fabricante, modelo)

