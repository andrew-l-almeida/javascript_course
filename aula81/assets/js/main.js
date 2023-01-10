class Dipositivo{
    #id;
    #descricao;
    #ligado;
    #preco

    constructor(id,descricao,preco){
        this.#id = id;
        this.#descricao = descricao;
        this.#preco = preco;
        this.#ligado = false;
    }
    get id(){
        return this.#id;
    }
    get descricao(){
        return this.#descricao;
    }
    get ligado(){
        return this.#ligado;
    }
}
class Notebook extends Dipositivo{
    #marca
    constructor(id,nome,marca){
        super(id,nome)
        this.#marca = marca
    }
    get marca(){
        return this.marca
    }
    static criaTeste(){
        console.log('testeee')
    }
}

const notebook1 = new Notebook(1,'Del', 'Bx404')
Notebook.criaTeste()

