/*var variable1 =  "soy la variable 1"; /*var : es una variable global*/
/*let variable2 = "soy la variable2"; /*la variable let:se limita el uso*/
/*const variable_constante= "1231231"; /*const: para crear una constatnte, ya no podemos cambiar el valor */

var variable1 = "soy la variable 1";
console.log(variable1);
variable1 = 1212;
console.log(variable1);

const variable2 ="variable 2";
console.log(variable2);
/*variable2 = 10;
console.log(variable2);*/


function varTest() {
    var x = 31;
    if (true) { 
        var x = 71;
        console.log(x);
    }
    console.log(x);
}

/*varTest();*/

function letTest() {
    let x = 31;
    if (true) { 
        let x = 71;
        console.log(x);
    }
    console.log(x);
}
letTest();

//FUNCIONES DE FLECHA//
const nuevaFuncion =() =>{
    var x = 31;
    if (true) { 
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
nuevaFuncion();

//ECMAScript: es para imprimir texto//
const nombre ='adriana';
const apellidos ='bermudez martinez'
//ECMAScript: es para imprimir texto//
console.log(`hola mi nombre es ${nombre} y mis apellidos son ${apellidos}`); //el sigo $: hace referencia a las variables q es const. las { : es para poner las variables//
