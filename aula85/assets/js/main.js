class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e)
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulario Enviado');
            this.formulario.submit()
        }
    }
    camposSaoValidos(){
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} nao pode estar em branco`)
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    senhasSaoValidas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha,'Senhas precisam ser iguais')
            this.criaErro(repetirSenha,'Senhas precisam ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid;
    }
    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
    validaCPF(campo){
        const cpf = new Cpf(campo.value)
        if(!cpf.valida(campo.value)){
            this.criaErro(campo, 'CPF Invalido')
            return false
        }
        return true
    }
    validaUsuario(campo){
        const usuario = campo.value
        let valid = true
        if(usuario.length <3 || usuario.length >12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres ')
            valid = false
        }
        if(!usuario.match(/[a-zA-z0-9]+$/g)){
            this.criaErro(campo,'Usuario precisa conter letras ou numeros')
        }
        return valid
    }
}

const valida = new ValidaFormulario()