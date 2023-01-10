const createTimeFromSeconds = (seconds) =>{
    const time = new Date(seconds * 1000)
    return time.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}
let seconds = 0;
let timer;
let timerStatus = false;

const clock = document.querySelector('.timer')
const startButton = document.querySelector('.iniciar')
const pauseButton = document.querySelector('.pausar')
const restartButton = document.querySelector('.zerar')

startButton.addEventListener('click', event =>{
    if(!timerStatus){
        timerStatus = true;
        clock.classList.remove('paused')
        timer = setInterval(function(){
            seconds+=1;
            clock.innerHTML = createTimeFromSeconds(seconds)
        }, 1000)
    }
})

pauseButton.addEventListener('click', () =>{
    if(timerStatus){
        timerStatus = false
        clock.classList.add('paused')
        clearInterval(timer)
    }
})

restartButton.addEventListener('click', () =>{
    timerStatus = false
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
    seconds = 0
})
