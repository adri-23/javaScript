/*1. Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
2. PLUS: Si los numeros no son un número o son menores o iguales a cero, nos vuelva a pedir
*/
let numero1 = parseInt(prompt('ingresa el primer numero'));
let numero2 = parseInt(prompt('ingresa el segundo numero'));

if (numero1 == numero2) {
    document.write(`<h1>el ${numero1} es igual al ${numero2} </h1>`);
} else if(numero1 > numero2) {
    document.write(`<h1> ${numero1} es mayor que ${numero2}</h1>`);
} else {
    document.write(`<h1>el ${numero1} es menor que ${numero2}</h1>`);
}


