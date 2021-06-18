const edad = 18;
let imprimir = '';
const texto = 'hola';
//estructura de control, hace referencia al if. el switch: se utiliza solo para cuando tenemos ==//
switch (edad) {  //dentro del parentesis es lo que se va a evaluar//
    case 18:
        imprimir = 'caso 18';
        break; //el break es como un cierre de case y default//
    case 20:
        imprimir = 'caso 20';
        break;
    case 'hola':
        imprimir = 'hola mundo';
    default:
        imprimir = 'datos por defecto'//default:si no se cumple ninguno de los casos puede imprimir algo//
        break;
}
document.write(`<h1>${imprimir}</h1>`); //imprimimos ECMAScript//
//doucment.write iprime en el documento//