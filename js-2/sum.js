function sum(numeros) {
    var suma = 0;
    for(var i = 0; i < numeros.length; i++){
        suma += numeros [i]
    }
    return suma;
}
console.log(sum([1,2,3]))