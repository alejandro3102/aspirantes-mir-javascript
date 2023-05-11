function bmi (peso, altura){
    var imc = peso / (altura * altura);
    return imc
}
var peso, altura

peso = prompt("cual es el peso");
altura = prompt("cual es la altura");

var resultado = bmi (peso, altura);
console.log("El IMC es:", resultado.toFixed(2));