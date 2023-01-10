let array = ['Andrew', 'almeida',7,8]
const array2 = ['luiz', 'otavio']
const array3 = [...array, ...array2]

const removido = array.splice(-2,2)
console.log(removido)
console.log(array[1])
console.log(array3)