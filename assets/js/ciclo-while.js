//primero compara y luego ejecuta//
let year = 2021;

while(year != 1990) { //se pone while, despues se pone la condicion//
    document.write(`<h1>${year}</h1>`);
    year--; //es para romper ciclo//
    //year=year-1;//

    //otra manera de romper ciclos es://
    if(year == 2010){
        break;
    }

}