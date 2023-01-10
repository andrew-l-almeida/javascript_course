const soma = (x, y)=>{
    if(typeof x !== 'number'|| typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros')
    }
    return x + y
}

try{
    console.log(soma(5,5))
    
}catch(e){
    console.log("Deu erro, contate o suporte")
}