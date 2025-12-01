let a = 10
let b = 7
let operador = 'mult'

const calcular = (a, b, operador) => {
    if (operador === 'mult') {
        console.log(a * b)
    }
}

calcular(a, b, operador)

//-----------------------------------------------

class Calculadora {          // Define uma classe chamada 'Calculadora'
    constructor() {          // Método constructor, executado sempre que a classe é instanciada
        this.a = 5           // Cria dentro da classe a propriedade 'a' com valor 5
        this.b = 5           // Cria a propriedade 'b' com valor 5
        this.operador = 'mult'   // Define o operador padrão como 'mult'
    }
    calcular() {             // Método da classe que realiza o cálculo
        if (this.operador === 'mult') {   // Se o operador for 'mult'...
            console.log(this.a * this.b)  // ...multiplica 'a' por 'b' e exibe no console
        }
    }
}

let calculadora = new Calculadora()   // Cria um novo objeto baseado na classe Calculadora
calculadora.calcular()                // Chama o método 'calcular' e executa a operação
