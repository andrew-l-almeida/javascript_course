const pessoa = {
    nome:'Andrew',
    endereço: {
        rua:'Joao Pessine',
        numero: 220
    },
    sexo:'Masculino',
    profissao:'Programador'

}

const {nome, profissao, sexo, ...resto} = pessoa;

console.log(resto)