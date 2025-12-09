function* conversar() {
    let opcao = yield 'E ai, tudo bem?'
}

let conversa = conversar()
let iteracao = conversa.next()
console.log(iteracao)

iteracao = conversa.next('Sim')
console.log(iteracao)