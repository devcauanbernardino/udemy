function* testeGenerator() {
    console.log('Teste 1')
    yield console.log('Teste 2')
    console.log('Teste 3')
    
    return 'Teste'
}

let meuGenerator = testeGenerator()
console.log(meuGenerator)

meuGenerator.next()

