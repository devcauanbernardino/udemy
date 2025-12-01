//modelo da entidade/objeto
class ContaBancaria {
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 546654
        this.saldo = 50
        this.limite = 450
    }

    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
}

const x = new ContaBancaria()
console.log(x.consultarSaldo())
console.log(x.depositar(60))
console.log(x.consultarSaldo())
console.log(x.sacar(50))
console.log(x.consultarSaldo())