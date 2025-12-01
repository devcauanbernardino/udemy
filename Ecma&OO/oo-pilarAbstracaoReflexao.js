//Um software de marcenaria
//cadeira e sofa 

//paradigma procedural

//cadeira
let qtdePernas = 4
let giratoria = false
let cor = 'azul'

//array de cadeiras
let cadeiras = []

cadeiras[0] = []
cadeiras[0]['qtdePernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = []
cadeiras[1]['qtdePernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelho'


function girarCadeira(indice) {
    if (cadeiras[indice]['giratoria'] === true) {
        console.log('Girou')
    } else {
        console.log('Cadeira não é giratoria')
    }
}

const addChair = (qtdePernas, giratoria, cor) => {
    let cadeira = []
    cadeira['qtdePernas'] = qtdePernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

// addChair(2, true, 'verde')

// girarCadeira(1)
// console.log(cadeiras)

//paradigma de oo

class Cadeira {
    constructor(qtdePernas, giratoria, cor) {
        this.qtdePernas = qtdePernas
        this.giratoria = giratoria
        this.cor = cor
    }
    
    girarCadeira() {
        if (this.giratoria === true) {
            console.log('Girou a cadeira')
        } else {
            console.log('A cadeira não gira')
        }
    }

    addChair(qtdePernas, giratoria, cor) {
        let cadeira = []
        this.qtdePernas = qtdePernas
        this.giratoria = giratoria
        this.cor = cor

        cadeiras.push(cadeira)
    }
}

let x = new Cadeira(2, true, 'vermelho')
let y = new Cadeira(2, false, 'vermelho')
x.girarCadeira()
y.girarCadeira()