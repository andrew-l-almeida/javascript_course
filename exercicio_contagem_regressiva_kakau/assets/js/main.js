const clock = document.querySelector('.timer')
const hourForm = document.querySelector('.hour')
const minutesForm = document.querySelector('.minutes')
const secondsForm = document.querySelector('.seconds');
const startButton = document.querySelector('.iniciar')
const pauseButton = document.querySelector('.pausar')
const restartButton = document.querySelector('.zerar')

let timerStatus = false;
let seconds = 0;
let timer;

const milisecondsFromSeconds = (seconds) =>{
    return seconds * 1000
}

const secondsFromMinutes = (minutes)=>{
    return minutes * 60
}

const secondsFromHours = (hours) =>{
    return hours * 60 * 60
}

const getTime = (hours, minutes, seconds) =>{
    return transformInNumber(secondsFromHours(hours)) + transformInNumber(secondsFromMinutes(minutes)) + transformInNumber(seconds)
}

const transformInNumber = (number) =>{
    return Number(number)
}

const createTimeFromSeconds = (seconds) =>{
    let date = new Date(milisecondsFromSeconds(seconds))
    return date.toLocaleTimeString('pt-br', {
        hour12:false,
        timeZone: 'UTC'
    })
}

const iniciar = () =>{
    clock.classList.remove('paused')
    if(!timerStatus){
        if(seconds === 0){
            timerStatus = true;
            seconds = getTime(hourForm.value, minutesForm.value, secondsForm.value)
        }
        timer = setInterval(function(){
            timerStatus = true;
            if(seconds === 0){
                timerStatus = false
                clearInterval(timer)
                alert('Final do Timer!!!!')
            }
            clock.innerHTML = createTimeFromSeconds(seconds)
            seconds = seconds -1
            
        },1000)
    }
}

const pausar = () =>{
    if(timerStatus){
        timerStatus = false
        clock.classList.add('paused')
        clearInterval(timer)
    }
}

const zerar = () =>{
    clock.classList.remove('paused')
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
    seconds = 0
    timerStatus = false
}


document.addEventListener('click', e =>{
    if(e.path[0].classList.value === 'iniciar'){
        iniciar();
    }
    if(e.path[0].classList.value === 'pausar'){
        pausar();
    }
    if(e.path[0].classList.value === 'zerar'){
        zerar();
    }
})
