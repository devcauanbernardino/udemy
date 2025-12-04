// contexto rest

// Declara uma função arrow chamada `soma` que recebe um parâmetro rest `...param`
const soma = (...param) => {
    // Inicializa a variável `resultado` com 0 — aqui vamos acumular a soma
    let resultado = 0
    // Para cada valor `v` dentro do array `param`, soma `v` em `resultado`
    param.forEach(v => resultado += v)
    // Retorna o valor acumulado em `resultado`
    return resultado
}

// Chama a função `soma` com os argumentos 3, 8, 5, 7, 9, 10, 50 e imprime o resultado no console
console.log(soma(3, 8, 5, 7, 9, 10, 50))

// Declara uma função arrow chamada `multiplicacao` que recebe um primeiro parâmetro `m`
// e um parâmetro rest `...p` (ou seja, `p` será um array com os argumentos restantes)
const multiplicacao = (m, ...p) => {
    // Inicializa `resultado` com 0 — usaremos para acumular o total
    let resultado = 0
    // Para cada valor `v` dentro do array `p`, multiplica `m * v` e soma o produto em `resultado`
    p.forEach(v => resultado += m * v)
    // Retorna o valor acumulado em `resultado`
    return resultado
}

// Chama `multiplicacao` com m = 5 e os outros argumentos 7, 12, 3, 49; imprime o resultado
console.log(multiplicacao(5, 7, 12, 3, 49))
