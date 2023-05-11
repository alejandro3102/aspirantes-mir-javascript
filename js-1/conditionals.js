function calcularColor(numero) {
    if (numero === 1) {
        return "El color es negro";
    } else if (numero === 2) {
        return "El color es blanco";
    } else if (numero === 3) {
        return "El color es azul";
    } else {
        return "El color es verde";
    }
}

  // Ejemplos de uso:
  console.log(calcularColor(1)); // Debe imprimir "El color es negro"
  console.log(calcularColor(2)); // Debe imprimir "El color es blanco"
  console.log(calcularColor(3)); // Debe imprimir "El color es azul"
  console.log(calcularColor(4)); // Debe imprimir "El color es verde"