export default class geradorSenha{
    constructor(numCarac, parametro){
        this.numCarac = numCarac
        this.parametros = parametro
        this.parametrosVez = [...parametro]
        this.senha;
        this.maiusculas = parametro[0]
        this.minusculas = parametro[1]
        this.numbers = parametro[2]
        this.simbolos = parametro[3]

        this.geraSenha(numCarac)
    }
    vez(parametro){
        let aindaTem = parametro.reduce((ac,valor,indice,array) =>{
            return ac? ac:valor
        })
        let indiceTem = parametro.reduce((ac,valor,indice,array) =>{
            if(valor) ac.push(indice)
            return ac
        },[])
        if(aindaTem){
            let index;
            for(let param in parametro){
                if(parametro[param]){
                    this.parametrosVez[param] = false
                    index = param;
                    return index
                }else{
                    continue
                }
            }
            return index
        }else{
            this.parametrosVez = [...this.parametros]
            for(let text in this.parametrosVez){
                if(this.parametrosVez[text]){
                    this.parametrosVez[text] = false
                    return text
                }
            }
        }
    }
   
    geraSenha(numCarac){
        let senha =' ';
        for(let carac = 1; carac<=numCarac;carac++){
            let digito = this.geraDigito()
            senha = senha + digito
        }
        this.senha = senha
        
    }
    geraDigito(){
        const vez = this.vez(this.parametrosVez)

        if(vez ==='0' && this.maiusculas){
            return this.geraMaiuscula()
        }
        if(vez ==='1' && this.minusculas){
            return this.geraMinuscula()
        }
        if(vez ==='2' && this.numbers){
            return this.geraNumber()
        }
        if(vez ==='3' && this.simbolos){
           return this.geraSimbolos()
        }
    }
    geraMaiuscula(){
        const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const caracAleatorio = Math.floor(Math.random() * (letrasMaiusculas.length - 1) + 1)
        return(letrasMaiusculas[caracAleatorio])
    }
    geraMinuscula(){
       const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
       const caracAleatorio = Math.floor(Math.random() * (letrasMinusculas.length - 1) + 1)
       return(letrasMinusculas[caracAleatorio])
    }
    geraNumber(){
        return Math.floor(Math.random() * (9 - 1) + 1)
    }
    geraSimbolos(){
        const caracteresEspeciais = '!@#$%¨&*()_+=-;:^~}]º{[ª`^.,|'
        const caracAleatorio = Math.floor(Math.random() * (caracteresEspeciais.length - 1) + 1)
        return(caracteresEspeciais[caracAleatorio])
    }
}
