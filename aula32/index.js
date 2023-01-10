// /*
//     Atribuição via Desestruturação
// */

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [p1, p2, p3, ...resto] = numeros;

// console.log(p1, p2, p3, resto)

const pessoa = {
    // nome: "Andrew",
    idade: 21,
    endereco:{
        rua:"joao Pessine",
        numero: 220
    },
    falaOi(){
        console.log("oi")
    }
}

const {nome:n = "Joao", endereco:{rua:teste = "asda"} = ""} = pessoa;

console.log(n, teste)