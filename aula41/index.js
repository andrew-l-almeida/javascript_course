// //Escreva uma função que recebe 2 numero e retorna o maior deles


// // let maior = (x, y) => x > y ? x : y;
// // console.log(maior(70,50));



// /**
//  * Escreva uma funcao chamada ePaisagem que recebe dois argumentos, largura e altura
//  * de uma imagem(number).
//  * Retorna true se a imagem estiver no modo paisagem
// */

// // const ePaisagem = (largura, altura) => largura>altura ? true:false


// // console.log(ePaisagem(500,600))


// /**
//  * Escreva uma funcao que recebe um numero
//  * Se o numero for divisivel por 3 retorna: fizz
//  * Se o numero for divisivel por 5 retorna: Buzz
//  * Se for divisivel por 3 e por 5 retorna: FizzBuzz
//  * Se nao for divisivel por 3 e por 5 retorna o proprio numero
//  * Se é realmente um numero: Retorna o proprio numero
//  * Usar a funcao com os numeros de 0 a 100;
//  */

// const divisivel = (num) =>{
//     if(isNaN(num)) return num

//     if(num % 3===0 && num % 5 ===0) return 'FizzBuzz'

//     if(num % 3 ===0) return 'Fizz'

//     if(num%5 ===0) return 'Buzz'
    
//     return num
// }

// for (let i = 0; i<=100; i++){
//     console.log(divisivel(i))
// }














function maior(x,y){
    return x>y? x:y
}
const maior2 = (x,y) => x>y?x:y;

console.log(maior2(1,-5))


const ePaisagem = (largura, altura)=>largura>altura?true:false;

