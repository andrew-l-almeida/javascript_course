const pessoa = {
    nome: "Andrew",
    sobrenome:"almeida",
    idade:15,
    fala(){
        console.log("Sou consistentasde")
    }
}
for(let chave in pessoa){
    if(typeof pessoa[chave] === 'string'){
        console.log(pessoa[chave])
    }
    if(typeof pessoa[chave] === 'function'){
        pessoa[chave]()
    }
    
}