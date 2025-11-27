//3 escopops = global, function, block

let serie = 'Friends'
console.log(serie)

function x() {
    let serie2 = 'Game of Thrones'
    // console.log(serie3) //Nao vai encontrar a variavel serie3 pq ela foi declarada dentro do if
    console.log(serie)
    if (true) {
        let serie3 = 'It'
        console.log(serie)
        console.log(serie3)
        console.log(serie2)
    }
}

x()

if (true) {
    console.log(serie)
    // console.log(serie2)//Nao vai encontrar a variavel serie2 pq ela foi declarada dentro da funcao x
}

// console.log(serie2)//Nao vai encontrar a variavel serie2 pq ela foi declarada dentro da funcao x

//------------------------------------------------------------------------------------------------------------

let game = 'Minecraft'

{
    let game = 'For Honor'
    console.log('Dentro do bloco: ' + game) //Vai imprimir For Honor pq o console.log esta dentro do bloco onde a variavel game foi redeclarada
}

console.log("Fora do bloco: " + game)