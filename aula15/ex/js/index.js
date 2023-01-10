const numero = parseFloat(prompt("Digite um Numero"));

const numeroTitulo = document.getElementById("numero-titulo");
const divTexto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
divTexto.innerHTML = `<p>${numero} + 2 = ${numero + 2}</P>`
divTexto.innerHTML += `<p>Raiz Quadrada = ${numero ** 0.5}</P>`
divTexto.innerHTML += `<p>É numero inteiro? = ${Number.isInteger(numero)}</P>`
divTexto.innerHTML += `<p>É NaN? = ${Number.isNaN(numero)}</P>`
divTexto.innerHTML += `<p>Arredondado pra Cima = ${Math.ceil(numero)}</P>`
divTexto.innerHTML += `<p>Arredondado pra Baixo = ${Math.floor(numero)}</P>`
divTexto.innerHTML += `<p>Com 2 Casas decimais = ${numero.toFixed(2)}</P>`

