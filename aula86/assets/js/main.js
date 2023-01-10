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
        if(typeof msg !== 'string'){
            reject('BAD Value')
            return
        }
        setTimeout(() =>{
            resolve(msg)
        }, tempo)
    })
}

esperaAi(1, 3000).then(r =>{
    console.log(r)
    return esperaAi('Acessando os Dados', 2000)
}).catch(e =>{
   return new Error('Falha ao conectar Banco de Dados: ' + e)
}).then(r =>{
    console.log(r)
    return esperaAi('Carregando os Dados' , 2000)
}).catch(e =>{
    throw new Error('Falha ao Acessar os Dados: ' + e)
}).then(r =>{
    console.log(r)
})
