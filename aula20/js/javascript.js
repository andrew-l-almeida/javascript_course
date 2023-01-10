// function main(){
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');
//     const pessoas = [];

//     const criaPessoa = (nome, sobrenome, peso, altura) =>{
//         pessoa = {
//             nome, sobrenome, peso, altura
//         }

//         pessoas.push(pessoa);
//         console.log(pessoas);
//     }

//     function recebeEventoForm(evento){
//         evento.preventDefault();
//         const nome = form.querySelector('.nome').value;
//         const sobrenome = form.querySelector('.sobrenome').value;
//         const peso = form.querySelector('.peso').value;
//         const altura = form.querySelector('.altura').value;

//         criaPessoa(nome, sobrenome, peso, altura)

//         resultado.innerHTML += `<h1>${nome}, ${sobrenome}, ${peso}, ${altura} </h1>`


//     }
   
//     form.addEventListener('submit', recebeEventoForm)
// }
// main();

function main(){
    const pessoas = [];
    const criaPessoa = (nome, sobrenome, idade, altura) =>{

        pessoa = {
            nome,
            sobrenome,
            idade,
            altura
        }

        pessoas.push(pessoa)
    }

    const formulario = document.querySelector("#form")
    const resultado = document.querySelector("#resultado")

    const recebeEventoForm = (e) =>{
        e.preventDefault();

        const nome = formulario.querySelector("#nome").value;
        const sobrenome = formulario.querySelector("#sobrenome").value;
        const idade = formulario.querySelector("#idade").value;
        const altura = formulario.querySelector("#altura").value;

        criaPessoa(nome, sobrenome, idade, altura)

        console.log(pessoas)

        resultado.innerHTML += `<h1>${nome}, ${sobrenome}, ${idade}, ${altura}</h1>`


    }

    formulario.addEventListener("submit", recebeEventoForm)

   const corUsuario = null;
   const corPadrao = corUsuario || "Preto"

   console.log(corPadrao)
}
main()
