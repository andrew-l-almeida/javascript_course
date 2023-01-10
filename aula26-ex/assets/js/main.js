// const formulario = document.querySelector('.form')

// //const recebeForm = (evento) =>{
//   //  evento.preventDefault();
// //}

// formulario.addEventListener('submit', recebeForm = (e) =>{
//     e.preventDefault();
//     const peso = Number(e.target.querySelector('.peso').value)
//     const altura = Number(e.target.querySelector('.altura').value)

//     if(!peso){
//         if(!altura){
//             setResultado('Peso e Altura Invalido', false)
//         }else{
//             setResultado('Peso Invalido', false)
//         }
//     }else if(!altura){
//         setResultado('Altura Invalida', false)
//     }else{
//         const IMC = calculaIMC(peso, altura);
//         setResultado(`Seu IMC é ${IMC.toFixed(2)}. ${checarNivelImc(IMC)}`, true)
//     }

// })

// function criaP(){
//     const p = document.createElement('p')
//     return p;
// }

// function setResultado(msg, isValid){
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = '';
//     const p = criaP()
//     if(isValid){
//         p.classList.add('paragrafo-valido')
//     }else{
//         p.classList.add('paragrafo-invalido')
//     }
//     p.innerHTML = msg;
//     resultado.appendChild(p);

// }
// function calculaIMC(peso, altura){
//     return (peso / (altura * altura))
// }

// function checarNivelImc(imc){
//     if(imc < 18.5){
//         return 'Abaixo do Peso'
//     }else if(imc >= 18.5 && imc < 25){
//         return 'Peso Ideal' 
//     }else if(imc >= 25 && imc < 30){
//         return 'Sobrepeso' 
//     }else if(imc >= 30 && imc < 35){
//         return 'Obesidade Grau 1' 
//     }else if(imc >= 35 && imc < 40){
//         return 'Obesidade Grau 2' 
//     }else{
//         return 'Obesidade Grau 3'; 
//     }
// }

function main(){
    const formulario = document.querySelector(".form")

    function calculaIMC(peso, altura){
        return (peso / (altura * altura))
    }
    function checarNivelImc(imc){
        if(imc < 18.5){
            return 'Abaixo do Peso'
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso Ideal' 
        }else if(imc >= 25 && imc < 30){
            return 'Sobrepeso' 
        }else if(imc >= 30 && imc < 35){
            return 'Obesidade Grau 1' 
        }else if(imc >= 35 && imc < 40){
            return 'Obesidade Grau 2' 
        }else{
            return 'Obesidade Grau 3'; 
        }
    }

    function recebeForm(e){
        e.preventDefault();
        const peso = Number(e.target.querySelector(".peso").value)
        const altura = Number(e.target.querySelector(".altura").value)

        if(!peso){
            if(!altura){
                setResultado('Peso e Altura Invalido', false)
            }else{
                setResultado('Peso Invalido', false)
            }
            }else if(!altura){
                setResultado('Altura Invalida', false)
             }else{
                const IMC = calculaIMC(peso, altura);
                setResultado(`Seu IMC é ${IMC.toFixed(2)}. ${checarNivelImc(IMC)}`, true)
            }

    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector(".resultado");
        resultado.innerHTML = '';
        const p = criaP();
        if (isValid){
            p.classList.add("paragrafo-valido")
        }
        else{
            p.classList.add("paragrafo-invalido")
        }
        p.innerHTML = msg;
        resultado.appendChild(p);

    }

    formulario.addEventListener("submit", recebeForm)
}
main()
