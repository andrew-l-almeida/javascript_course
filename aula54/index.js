(function(){
    function criaPessoa(nome, sobrenome, peso, altura){
        return{
            nome,
            sobrenome,
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome}`
            },
            set nomeCompleto(valor){
                valor = valor.split(' ');
                this.nome = valor.shift();
                this.sobrenome = valor.join(' ');
            },
            peso,
            altura,
            fala(){
                console.log(`${this.nome} esta falando`)
            },
            get imc(){
                return (this.peso / this.altura **2).toFixed(2)
            }
        }
    }

    const p1 = criaPessoa('Andrew', 'Almeida', 55, 1.62)
    console.log(p1.nomeCompleto)
    p1.nomeCompleto = 'Cleonice Teodoro Lima'
    console.log(p1.nomeCompleto)
})()