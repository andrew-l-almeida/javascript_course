const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'}
]
// const container = document.querySelector('.container');
// const div = document.createElement('div')

// for(let i = 0; i<elementos.length; i++){
//     const{tag: tagExtraido, texto: textoExtraido} = elementos[i];

//     const elemento = document.createElement(tagExtraido);
//     const textoCriado = document.createTextNode(textoExtraido)
//     console.log(textoCriado)
//     elemento.appendChild(textoCriado);
//     div.appendChild(elemento)
    
// }
// container.appendChild(div)


const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    const {tag: tagExtraida, texto: textoExtraido} = elementos[i]

    const elemento = document.createElement(tagExtraida);
    const textoCriado = document.createTextNode(textoExtraido)
    console.log(textoCriado)
    elemento.appendChild(textoCriado)
    div.appendChild(elemento)
}
container.appendChild(div)
























































































// const section = document.querySelector('.container');
// const div = document.createElement('div');


// for(let i = 0; i<elementos.length; i++){

//     const {tag, texto: text} = elementos[i]
    
//     const createdElement = document.createElement(tag);
//     createdElement.innerHTML = text;
//     div.appendChild(createdElement)
// }
// section.appendChild(div)