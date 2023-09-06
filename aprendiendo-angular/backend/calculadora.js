'use strict';
console.log("Hola mundo con Node.js");
var params = process.argv.slice(2);
if (params.length < 2) {
    console.log("Por favor, proporciona dos números como argumentos.");
} else {
    var numero1 = parseFloat(params[0]);
    var numero2 = parseFloat(params[1]);

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Alguno de los argumentos no es un número válido.");
    } else {
        console.log(numero1);
        console.log(numero2);
        var suma = numero1 + numero2;
        var resta = numero1 - numero2;
        var multiplicacion = numero1 * numero2;
        var division = numero1 / numero2;

        var plantilla = `
        La suma es: ${suma}
        La resta es: ${resta}
        La multiplicación es: ${multiplicacion}
        La división es: ${division}
        `;
        console.log(plantilla);
    }
}
