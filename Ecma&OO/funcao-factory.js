let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'Unica',
    aro: 12,
    pedalar() {
        console.log('Pedalando')
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,
    pedalar() {
        console.log('Pedalando')
    }
}

//------------------------------------------------------------------

let BicicletaFactory = (cor, marcha, aro) => {
    //logica
    //requisicao http
    //resposta http

    return {
        cor,
        marcha,
        aro,
        pedalar() {
            console.log('Pedalando')
        }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelho', 18, 26)
console.log(Bicicleta3)