let nome = 'Cauan'//document.getqueryselector().value
let idade = 21
let sexo = 'Masculino'
let profissao = 'Desenvolvedor'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()


//ES6
let objeto2 = {
    nome, // nome = nome variavel / valor = valor da variavel
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto2)