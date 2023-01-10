

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Leticia', idade: 19 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 }
// ]


// const maisVelha = pessoas.reduce((acumulador, valor) => {
//     console.log(acumulador, valor)
//     if(acumulador.idade > valor.idade) return acumulador
//     return valor
// },0)

// console.log(maisVelha)

const numeros = [1, 2, 3, 5, 6, 4, 9, 7, 8, 10, 50, 60, 80, 90, 10, 150, 60, 80, 90];

const numerosPares = numeros.filter(valor => valor%2===0).map(valor => valor *2).reduce((ac,valor) => {return ac + valor})
console.log(numerosPares)

let soma = 0;
numeros.forEach((valor,indice,array) =>{
    console.log(valor, indice, soma)
    soma +=valor;
})

console.log(soma)

