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

function ValidaCpf(cpf){
    let cpfParcialPrivado;
    Object.defineProperties(this,{
        cpfLimpo:{
            enumerable:true,
            get: function(){
                return cpf.replace(/\D+/g,'')
            }
        },
        cpfParcial:{
            enumerable:false,
            get: function(){
                cpfParcialPrivado =  this.cpfLimpo.slice(0,-2);
                return cpfParcialPrivado
            },
        }
    })
}
ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !==11) return false
    if(this.isSequenca()) return false;

    const digito1 = this.criaDigito(this.cpfParcial)
    const digito2 = this.criaDigito(this.cpfParcial + digito1)

    const novoCpf = this.cpfParcial + digito1 + digito2
    
    return (this.cpfLimpo === novoCpf)

}
ValidaCpf.prototype.criaDigito = function(cpf){
    const cpfArray = Array.from(cpf);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac,valor) =>{
        ac += regressivo * Number(valor);
        regressivo--;
        return ac
    },0)
    const digito = 11 - (total % 11);
    return digito > 9? '0': String(digito)
    
}
ValidaCpf.prototype.isSequenca = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;
}

const cpf1 = new ValidaCpf('47792877812');

if(cpf1.valida()){
    console.log(`CPF Enviado: ${cpf1.cpfLimpo}`)
    console.log('CPF Valido')
}else{
    console.log(`CPF Enviado: ${cpf1.cpfLimpo}`)
    console.log('CPF Invalido')
}