// const inputTarefa = document.querySelector('.input-tarefa');
// const btnTarefa = document.querySelector('.btn-tarefa');
// const tarefas = document.querySelector('.tarefas');

// function criaLi(){
//     const li = document.createElement('li');
//     return li;
// }

// inputTarefa.addEventListener('keypress', function(e){
//     if(e.keyCode ===13){
//         if(!inputTarefa.value) return;
//         criaTarefa(inputTarefa.value)
//     }
// })

// function limpaImput(){
//     inputTarefa.value = '';
//     inputTarefa.focus();
// }

// function criaBotaoApagar(li){
//     li.innerText += ' ';
//     const botaoApagar = document.createElement('button');
//     botaoApagar.innerText = 'Apagar';
//     botaoApagar.setAttribute('class','apagar')
//     li.appendChild(botaoApagar)

// }

// function criaTarefa(textoInput){
//     const li = criaLi(); 
//     li.innerText = textoInput;
//     tarefas.appendChild(li)
//     limpaImput()
//     criaBotaoApagar(li)
//     salvarTarefas();
// }

// btnTarefa.addEventListener('click', function(e){
//     if(!inputTarefa.value) return;
//     criaTarefa(inputTarefa.value)
// })

// document.addEventListener('click', function(e){
//     const el = e.target;
//     if(el.classList.contains('apagar')){
//         el.parentElement.remove()
//         salvarTarefas();
//     }
// })

// function salvarTarefas(){
//     const liTarefas = tarefas.querySelectorAll('li');
//     const listaDeTarefas = [];

//     for(let tarefa of liTarefas){
//         let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
//         listaDeTarefas.push(tarefaTexto)
//     }
//     const tarefasJSON = JSON.stringify(listaDeTarefas)
//     localStorage.setItem('tarefas', tarefasJSON)
// }

// function adicionaTarefasSalvas(){
//     const tarefas = localStorage.getItem('tarefas')
//     const listaDeTarefas = JSON.parse(tarefas);

//     for(let tarefa of listaDeTarefas){
//         criaTarefa(tarefa)
//     }
// }

// adicionaTarefasSalvas()



const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

const limpaInput = () =>{
    inputTarefa.value = '';
    inputTarefa.focus();
}

const criaLi = () =>{
    const li = document.createElement('li');
    return li;
}

const criaBotaoApagar = (li) =>{
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar'
    li.appendChild(btnApagar);
    // btnApagar.classList.add('apagar') -> Utilizar o setAtribute
    btnApagar.setAttribute('class','apagar')
    btnApagar.setAttribute('title','Apagar esta tarefa  ')
}

const criaTarefa = (textoInput) =>{
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('btn-tarefa')){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas();
    }
})

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

const salvarTarefas = () =>{
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

const adicionaTarefasSalvas = () =>{
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let t of listaDeTarefas){
        criaTarefa(t)
    }
}

adicionaTarefasSalvas()