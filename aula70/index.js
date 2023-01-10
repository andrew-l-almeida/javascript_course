const pessoa = new Object();

pessoa.nome = 'Andrew'
pessoa.idade = 22
pessoa.falarNome = function(){
    console.log(this.nome, 'Esta faland')
}
pessoa.getIdade = function(){
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.idade;
}

console.log(pessoa.getIdade())