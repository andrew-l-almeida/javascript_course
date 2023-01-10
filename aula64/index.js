// Crie um Array com os numeros maiores que 10

// const numeros = [5, 6, 10, 50, 60, 8, 40, 3, 60, 80, 9, 60, 4, 45, 13, 79, 95, 84, 35, 485]

//Feita por mim
// const arrayNovo = []
// for(numero of numeros){
//     if(numero >=10){
//         arrayNovo.push(numero)
//     }
// }
// console.log(arrayNovo)

//Usando o Filter da Forma Longa

// function filterCallback(valor, indice, array){
//     if(valor >= 10){
//         return true;
//     }else{
//         return false;
//     }
// }

//Reduzindo um pouco a funcao callback
// function filterCallback(valor){
//     return valor >=10
// }

// const arrayNovo = numeros.filter(valor => valor >=10)
// console.log(arrayNovo)


const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

// Retorne as pessoas cujo nome tem mais de 5 letras
// const pessoas2 = pessoas.filter(valor => valor.nome.length > 5)
// console.log(pessoas2)

// // Retorne as pessoas cuja idade seja maior que 50 anos
// const pessoas3 = pessoas.filter(valor => valor.idade >50)
// console.log(pessoas3)

// Retorne as Pessoas cujo nome termina com a letra 'a'
const pessoas4 = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a')
    // const nome = valor.nome.split('')
    // const ultimaLetra = nome.splice(-1,1)
    // if(ultimaLetra[0] === 'a'){
    //     return true
    // }else{
    //     return false
    // }
})
console.log(pessoas4)
