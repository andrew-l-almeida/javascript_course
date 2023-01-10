const nome = 'Andrew'
const idade = 21;
const peso = 55;
const altura = 1.65;
const sexo = 'Masculino'

function Pessoa(nome, idade, peso, altura, sexo, imc) {

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            configurable: false,
            get: function(){
                return nome
            },
            // set: function(valor){
            //     nome = valor;
            // }
        },
        idade: {
            enumerable: true,
            get:function(){
                return idade
            },
            set: function(valor){
                if(typeof valor !=='number'){
                    return
                }
                idade = valor
            },
            configurable:false,
            
        },
        peso: {
            enumerable:false,
            value:peso,
            writable: true,
            configurable: false
        },
        altura: {
            enumerable:false,
            value:altura,
            writable: true,
            configurable: false
        },
        sexo: {
            enumerable:false,
            value:sexo,
            writable: true,
            configurable: false
        },
        imc: {
            enumerable:false,
            get: function(){
                return (this.peso / (this.altura * this.altura)).toFixed(2)
            },
            set:function(valor){
                imc = valor;
            },
        }
    })
}

Pessoa.prototype.falaNome = function(){
    return this.nome;
}

const p1 = new Pessoa(nome, idade, peso, altura, sexo)
