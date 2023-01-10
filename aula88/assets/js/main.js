function random(min, max){
    min = min * 1000;
    max = max * 1000;

    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') reject('Bad Value')
            resolve(msg)
        }, tempo)
    })
}


async function executar(){
    try{
        const fase1 = await esperaAi(1, 3000)
        console.log(fase1)
        const fase2 =await esperaAi('Fase 2', 500)
        console.log(fase2)
        const fase3 =await esperaAi('Fase 3', 1500)
        console.log(fase3)
    }
    catch(e){
        console.log(e)
    }
}
executar()