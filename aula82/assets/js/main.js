class Carro{
    #nome;
    #velocidade;
    constructor(nome){
        this.#nome = nome;
        this.#velocidade = 0;
    }
    get nome(){
        return this.#nome;
    }
    set nome(valor){
        this.#nome = valor
    }
    get velocidade(){
        return this.#velocidade;
    }
    acelerar(){
        if(this.#velocidade >=100) return
        this.#velocidade++;
    }
    freiar(){
        if(this.#velocidade <=0) return 
        this.#velocidade--;
    }
}

const c1 = new Carro('Fusca')

for(let i = 0; i<=200;i++){
    c1.acelerar()
}
console.log(c1.nome)
c1.nome = 'Mclaren'
console.log(c1.velocidade)
