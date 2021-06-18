const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
//para imprimir en un solo codigo y no hagamos repetitivamente lo anterior usamos lo sig//
for(let i=0; i < 12; i++) {
    console.log(meses[i]);
}

//tablas de multiplicar//
const multiplicar = (numero) => { //funcion de flecha//
    for(let i=1; i<=10; i++) {
        document.write(`<h1>${numero} x ${i} = ${numero * i}</h1>`);
    }
}
multiplicar(4); //en los parentesis va el numero de tabla que queremos //