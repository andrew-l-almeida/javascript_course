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
70  0   40  28  48  20  16  15  0   10
----------------------------------------
              SOMA: 284

11 - (284 % 11) = 2 (Segundo Digito)
Se o Numero for Maior que 9 Considerar 0

*/

/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g,'')

const cpfArray = Array.from(cpfLimpo);*/

const cpf1 = '477.928.708-12';
const cpf2 = '477.928.708-12';

function limpaCpf(cpf){
    return cpf.replace(/\D+/g,'')
}
function retira2dDigitos(cpf){
    return cpf.slice(0,-2)
}
function criaArrayDeString(string){
    return Array.from(string)
}
function pegarDigitoCPF(valor){
    let digito = 11 - (valor % 11)
    if(digito >9){
        digito = 0;
    }
    return digito
}
function concatenarDigitoCpf(cpf,dig){
    return cpf.push(dig)
}
function criaStringdeArray(array){
    let string1 = ''
    array.forEach((valor,indice) =>{
        if(indice ===3 || indice ===6){
            string1 += '.' + valor
        }else if(indice ===9){
            string1 +='-' + valor
        }else{
            string1 +=valor
        }
    })
    return string1
}

function multiplicacaoESomaCpf(cpf){
    if(cpf.length === 9){
        const cpfConta = cpf.map((valor,indice) =>{
            const multiplicador = 10 - indice;
            return valor * multiplicador
        }).reduce((ac,valor) =>{
            ac += valor
            return ac
        })
        return cpfConta
    }

    if(cpf.length ===10){
        const cpfConta = cpf.map((valor,indice) =>{
            const multiplicador = 11 - indice;
            return valor * multiplicador;
        }).reduce((ac,valor) =>{
            ac +=valor
            return ac;
        })
        return cpfConta;
    }
}

function validaCPF(cpf){
    let cpfLimpo = limpaCpf(cpf)
    let cpf9dig = retira2dDigitos(cpfLimpo)
    const cpfArray = criaArrayDeString(cpf9dig)
    let conta = multiplicacaoESomaCpf(cpfArray)
    const digito = pegarDigitoCPF(conta)
    concatenarDigitoCpf(cpfArray,digito);
    console.log(cpfArray)
    conta = multiplicacaoESomaCpf(cpfArray)
    const digito2 = pegarDigitoCPF(conta);
    concatenarDigitoCpf(cpfArray,digito2)
    const cpfGerado = criaStringdeArray(cpfArray)
    const isValid = comparaCPF(cpf,cpfGerado)
    console.log(`CPF Enviado: ${cpf}, CPF Gerado: ${cpfGerado}`)
    if(isValid){
        console.log('Cpf Valido')
    }else{
        console.log('Cpf Invalido!!!')
    }
    return isValid
}
function comparaCPF(cpfGerado,cpf){
    return cpfGerado ===cpf;
}

console.log(validaCPF('477.928.708-12'))

const a = {
    nome:'asdasd'
}
