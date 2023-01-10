function random(min, max){
    min = min * 1000;
    max = max * 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

// function esperaAi(msg, tempo){
//     setTimeout(() =>{
//         console.log(msg)
//     }, tempo)
// }
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') reject('Bad Value')
            resolve(msg)
        }, tempo)
    })
}
/*  Promise.all
    Promise.race
    Promice.resolve()
    Promise.reject() */

    const promises = [
        // 'Primeiro Valor',
        esperaAi('Promise 1', 3000),
        esperaAi('Promise 2', 500),
        esperaAi('Promise 3', 1000),
        esperaAi(100, 499),
    ]

    // Promise.all(promises)
    //     .then((valor) =>{
    //         console.log(valor)
    //     })
    //     .catch(e =>{
    //         console.log(e)
    //     })
    Promise.race(promises)
        .then((valor) =>{
            console.log(valor)
        })
        .catch(e =>{
            console.log(e)
        })


