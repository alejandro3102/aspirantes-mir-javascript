function suma(numero){
    if(numero<=0){
        return 0;
    }else{
        return numero + suma(numero -1);
    }
}
const numero = 10
const resultado = suma(numero)
console.log("la suma es :", resultado);