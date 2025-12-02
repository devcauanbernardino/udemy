class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor(){
        super()
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('Correr')
    }

    rosnar() {
        console.log('Rosnar')
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor() {
        super()
        this.bico = 'Médio'
        this.sabeFalar = true
    }
    falar() {
        console.log('Falando')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

cachorro.dormir()
passaro.dormir()
papagaio.dormir()
papagaio.falar()
console.log(cachorro)
console.log(passaro)
console.log(papagaio)
