

/* Enunciado del ejercicio 3
Dada una palabra, búscala en una frase y devuelve cuántas veces
aparece en la frase.
La frase y la palabra deben ser parámetros de una función 

Ejemplo: 
coincidencias("encuentra las veces que aparece veces", "veces") // devuelve 2
coincidencias("mi gato es muy simpático", "perro") // devuelve 0


Cómo hacerlo:
- Función con parámetros "frase" y "búsqueda".
- Poner el string en minúsculas y limpiarlo.
- Comprobar si en la búsqueda está incluida la frase.
- Crear un array de palabras de la frase.
- Mapear esas palabras y hacer un contador de cada una.
- Devolver el contador de la búsqueda.
*/


function coincidencias (frase,busqueda){
    let textLimpio = frase.toLowerCase().replace(/[,;.\-!?]/gi, '');

    let resultado = 0

    if (textLimpio.includes(busqueda)){

        let palabras = textLimpio.split(' ')
        let mapa ={}
        for (let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++
            }else{
                mapa[palabra]=1
            }
        }
        resultado= mapa[busqueda]
        

    }else {
        resultado = 0
        console.log(`hay ${resultado} coincidencias`)
    }
    return resultado;
        
}
console.log(
    "numero de coincidencias en la frase", 
    coincidencias("esta Es, frase donde buscar la frase","frase")
    )
