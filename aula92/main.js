const nome = 'luiz'
const obj = {nome}

const novoObj = {...obj}
console.log(novoObj)

const array = []

//npx babel main.js -o bundle.js --presets=@babel/env