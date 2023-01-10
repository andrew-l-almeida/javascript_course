const form = document.querySelector('.form')
const peoples = []

form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = form.querySelector('.nome').value
    const sobrenome = form.querySelector('.sobrenome').value
    const idade = form.querySelector('.idade').value
    const peso = form.querySelector('.peso').value
    const altura = form.querySelector('.altura').value
    
    peoples.push({
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso,
        altura: altura

    })

    console.log(peoples)

})