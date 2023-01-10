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

class Cpf{
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g,'')
    }
    static valida(cpf){
        const cpfLimpo = cpf.replace(/\D+/g,'');
        const cpfParcial = cpfLimpo.slice(0,-2)

        const criaDigito = function(cpfParcial){
            const cpfArray = Array.from(cpfParcial);
            let regressivo = cpfArray.length + 1;

            const total = cpfArray.reduce((ac,valor) =>{
            ac += regressivo * Number(valor);
            regressivo--;
            return ac
    },0)
    const digito = 11 - (total % 11);
    return digito > 9? '0': String(digito)
        }
        const digito1 = criaDigito(cpfParcial)
        const digito2 = criaDigito(cpfParcial + digito1)
        const cpfGerado = cpfParcial + digito1 + digito2;
        console.log(`${cpfLimpo}, ${cpfGerado}`)
        if(cpfGerado === cpfLimpo){
            debugger
            console.log(`CPF VALIDO, Criando CPF...`)
            const cpfF = new Cpf(cpfGerado)
            return cpfF;
        }else{
            console.log('CPF Invalido, Impossivel Criar CPF')
            return false
        }
    }
}


const cpf1 = Cpf.valida('15401347847')
console.log(cpf1)
