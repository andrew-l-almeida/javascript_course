// Produto
// Camiseta = Cor, Caneca = Material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(aumento){
    this.preco += aumento;
}
Produto.prototype.desconto = function(aumento){
    this.preco -= aumento;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const camiseta2 = new Camiseta('Blusa de Frio', 350, 'Azul')

const produto = new Produto('geb', 111)
const camiseta = new Camiseta('Regata', 150, ' preta')
const caneca = new Caneca('Xicara', 45.99, 'Porcelana')

camiseta.aumento(100)
camiseta2.aumento(500)
console.dir(produto)
console.dir(camiseta)
console.dir(camiseta2)
console.dir(caneca)


