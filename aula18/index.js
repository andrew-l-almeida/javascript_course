const criaPessoa = (nome, sobrenome, idade) =>{
    return {
        nome,
        sobrenome,
        idade,
        fala(){
            console.log(`${this.nome} está falando oi...`)
        }
    }
}

Pessoa = criaPessoa("Andrew", "Almeida", 21)

Pessoa.fala();