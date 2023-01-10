const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    })
}
let segundos = 0;
let timerIniciado = false;
let timer;

function iniciaRelogio(){
    if(!timerIniciado){
        relogio.classList.remove('pausado')
        timerIniciado = true;
         timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        },1000)
    }
}
function pausaRelogio(){
    if(timerIniciado){
        timerIniciado = false;
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
}
function zerarRelogio(){
    relogio.classList.remove('pausado') 
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    pausaRelogio()
        
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('iniciar')){
        iniciaRelogio();
    }
    if(el.classList.contains('pausar')){
        pausaRelogio();
    }
    if(el.classList.contains('zerar')){
        zerarRelogio()
    }
})
