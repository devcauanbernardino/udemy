const FILME = "The Batman"
// FILME = 'Avatar' // Erro! Tentando reatribuir uma constante
console.log('Escopo global: ' + FILME)

function x() {
    const FILME = 'Cavaleiro das Trevas'
    console.log('Dentro da funcao: ' + FILME)
}
x()