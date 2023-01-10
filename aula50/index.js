function soma(a,b,...rest){
    let soma = 0;
    for(resto in rest){
        soma += rest[resto];
    }

    console.log(soma)
    return a + b;
}

console.log(soma(5,6,7,8,5,8,6,5))