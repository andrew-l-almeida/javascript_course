// Crie um Array com os numeros maiores que 10

// const numeros = [5, 6, 10, 50, 60, 8, 40, 3, 60, 80, 9, 60, 4, 45, 13, 79, 95, 84, 35, 485]

// /**
//  * 
//  *                  MAP
//  *          Dobrando esse array
//  */
// const numerosDobrados = numeros.map(valor => valor * 2);
// console.log(numerosDobrados)






const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

// Para Cada Elemento
// Retorne apenas uma String com o nome da pessoa

// const nomePessoas = pessoas.map(valor => valor.nome);
// console.log(nomePessoas)

// Remova apenas a chave 'nome' do objeto
// const semNome = pessoas.map(valor =>{
//     delete valor.nome
//     return valor
// })
// console.log(semNome)

// Adiciona a chave id em cada Objeto
const id = pessoas.map((valor, indice) =>{
    const newObj = {...valor}
    newObj.id = indice;
    newObj.altura = 50;
    return newObj
})
console.log(id)
console.log(pessoas)