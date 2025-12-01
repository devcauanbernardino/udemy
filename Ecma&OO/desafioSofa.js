class Sofa {
    constructor(qtdePernas, reclinavel, cor) {
        this.qtdePernas = qtdePernas
        this.reclinavel = reclinavel
        this.cor = cor
    }

    reclinarSofa() {
        if (this.reclinavel === true) {
            console.log('O sofa reclina')
        } else {
            console.log('O sofa nao reclina')
        }
    }
}

let sofaVermelho = new Sofa(4, true, 'Vermelho')
let sofaPreto = new Sofa(5, false, 'Preto')
sofaVermelho.reclinarSofa()

console.log(sofaVermelho)


