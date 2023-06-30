


/*Enunciado del segundo ejercicio:

Dado un número cualquiera, resolver su tabla de multiplicar del 1 al 10.

Ejemplo para el numero 6:

*Tabla del 6*
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60 

"¿Cómo hacerlo?

Crearemos una función a la que le podamos pasar el parámetro número.
Crearemos una variable con el string del encabezado.
Bucle del 1 al 10.
Concatenaremos a la variable creada un string con el iterador, la variable número y la multiplicación con el resultado."

*/

function Tabla (numero){
    let resultado = `*Tabla del ${numero}\n`
    for ( let i = 1; i<=10; i++){
        let multiplicacion = (i*numero)
        resultado += `${numero} x ${i} = ${multiplicacion}\n`
    }
    return resultado;
}
console.log(Tabla (9))