// Validador de CPF
/*
705.484.450-52     -----     070.987.720-03


7x  0x  5x  4x  8x  4x  4x  5x  0x  
10  9   8   7   6   5   4   3   2 
70  0   40  28  48  20  16  15  0
----------------------------------
           SOMA: 237

11 - (237 % 11) = 5 (Primeiro Digito)
Se o Numero for Maior que 9 Considerar 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   40  28  48  20  16  15  0   10
----------------------------------------
              SOMA: 284

11 - (284 % 11) = 2 (Segundo Digito)
Se o Numero for Maior que 9 Considerar 0

*/

/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g,'')

const cpfArray = Array.from(cpfLimpo);*/

const cpf1 = '477.928.758-12';

function limpaCpf(cpf){
    return cpf.replace(/\D+/g,'')
}
function retira2dDigitos(cpf){
    return cpf.slice(0,-2)
}
function criaArrayDeString(string){
    return Array.from(string)
}
function getDigito(cpf){
    let somatoria;
    let dig;
    if(cpf.length === 9){
        somatoria = cpf.map(((dig, ind) =>{
            return dig * (10 - ind)
        })).reduce((ac, valor) =>{
            return ac += valor
        })
        
    } 
    else{
        somatoria = cpf.map(((dig, ind) =>{
            return dig * (11 - ind)
        })).reduce((ac, valor) =>{
            return ac += valor
        })
        
    }
    dig = 11 - (somatoria % 11)
    return dig
}

function comparaCPF(cpf1, cpf2){
    return cpf1 === cpf2
}
function iniciaVerificacao(cpf){
    const cpfLimpo = limpaCpf(retira2dDigitos(cpf))
    const cpfLimpo1 = limpaCpf(cpf)
    const arrayCPF = criaArrayDeString(cpfLimpo)
    const dig1 = getDigito(criaArrayDeString(arrayCPF));
    arrayCPF.push(dig1)
    const dig2 = getDigito(arrayCPF)
    arrayCPF.push(dig2)
    console.log(arrayCPF)
    const teste = limpaCpf(arrayCPF.toString())
    console.log(teste)

    return comparaCPF(teste, cpfLimpo1)
    
}
console.log(iniciaVerificacao(cpf1))
