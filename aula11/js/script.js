let num1 = Number(prompt("Digite um numero"));
let num2 = Number(prompt("Digite o segundo numero"));
let resultadoSoma = num1 + num2;

alert(`O Resultado da Soma é ${resultadoSoma}`)
let resposta = window.confirm("Deseja apagar a mensagem?");

if(resposta){
    alert("Apagado com sucesso")
    resultadoSoma = undefined;
    alert(`${resultadoSoma}`)
}
else{
    alert(`Mensagem não foi apagada: ${resultadoSoma}`)
}
alert (typeof resultadoSoma);
