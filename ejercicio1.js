
 /*Dada una cadena de texto, comprobar si es un palíndromo o no.
 No tener en cuenta espacios, tildes o símbolos.



 Un palíndromo es una palabra, número, frase u otro tipo de secuencia de caracteres que se lee igual de adelante 
 hacia atrás que de atrás hacia adelante, ignorando los espacios, la puntuación y las diferencias de mayúsculas y minúsculas. 
 Aquí te dejo cuatro ejemplos:

 "reconocer" - Esta palabra se lee igual de izquierda a derecha que de derecha a izquierda.
 "anilina" - Al igual que en el ejemplo anterior, esta palabra se lee igual en ambas direcciones.
 "radar" - Esta es una palabra corta que también es un palíndromo.



Qué necesito?

funcion espalindromo ("texto")
espalindromo ("radar") == true 
espalindromo ("perro") == false

¿Cómo lo puedo hacer?
Necesito darle la vuelta a la cadena de texto y compararla con la cadena de texto original.

 */

function palindromo (text){
let inversion = text
                .split("")
                .reverse("")
                .join("")

return (inversion===text)

}
console.log ("Es palindromo? "+palindromo("radar"))
