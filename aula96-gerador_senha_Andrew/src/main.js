import geradorSenha from './modules/geradorSenha'
import './assets/css/style.css'


(function(){
    const senhaGerada = document.querySelector('.senha-gerada')
    document.addEventListener('click', e=>{
        const el = e.target
        const arrayParameters = []
    
        if(el.classList.contains('gerar-senha')){
            const numCarac = document.querySelector('.num-carac').value
            const checkboxes = document.querySelectorAll('.input-checkbox')
            for(let checkbox of checkboxes){
                arrayParameters.push(checkbox.checked)
            }
            const gera = new geradorSenha(numCarac, arrayParameters)
            senhaGerada.innerText = gera.senha
        }
        
    })
    



})()