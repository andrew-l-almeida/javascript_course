// const objA = {
//     chaveA:'A',
//     fala(){
//         console.log("Objeto A Falando...")
//     }
// }
// const objB = {
//     chaveB:'B'
// }
// const objC = {
//     chaveC:'C'
// }

// console.dir(objB)

// Object.setPrototypeOf(objB,objA)
// Object.setPrototypeOf(objC,objB)

// console.dir(objC)


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const p1 = new Produto('Televisao', 1000)

p1.desconto(50)
console.log(p1)

const p2 = {
    nome:'Radio',
    preco: 200
}

Object.setPrototypeOf(p2,Produto.prototype)
console.dir(p2)

const p3 = Object.create(Produto.prototype)
console.log(p3)