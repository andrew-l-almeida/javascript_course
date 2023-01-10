function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log('Saldo Insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -=valor;
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo +=valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Agencia: ${this.agencia} | Conta: ${this.conta}, Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = Conta;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo Insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -= valor;
    this.verSaldo()
}

function ContaPoupança(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = Conta;


const conta = new Conta('0001','9337680',50)
const contaCorrente = new ContaCorrente('0001', '9337680', 50, 250)
const contaPoupança = new ContaPoupança('0001', '9337680', 50, 500)

console.log(contaPoupança)

conta.depositar(50)
conta.sacar(100)
conta.verSaldo()
console.log()

contaCorrente.verSaldo()
contaCorrente.depositar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(50)
contaCorrente.sacar(1)

console.log()
contaPoupança.sacar(100)