/*
    Factory Functions e Prototype

*/
const falar = {
    falar(){
        console.log(this.nome + ' Esta falando')
    }
}
const comer = {
    comer(){
        console.log(this.nome + ' Esta comendo')
    }
}
const pessoaPrototype = {...falar,...comer}
function criaPessoa(nome, sobrenome){
    
    return Object.create(pessoaPrototype,{
        nome:{
            enumerable:true,
            value: nome
        },
        sobrenome:{
            enumerable:true,
            value:sobrenome,
        }
    })
}

const p1 = criaPessoa('Andrew', 'Almeida')

p1.comer()