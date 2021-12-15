//alert("hola mundo"); comentario de una linea
/* este 
es un 
comentario de varias lineas
control z borrar
selleccionar  alt + shift +a atajo comentario multi

palabras reservadas 
var         casi no es utilizada 
const 
let 
*/
//valores primitivos
// String cadena de texto se pueden escribir espacios y simbolos
let miNombre = "Luis daniel";
console.log(miNombre); //muestra lo que hay dentro de la variable

/*
number
numero entero 
numero decimal 
o numero negativo
 */

let numero1 = 10;
let numero2 = 10.05;
let numero3 = -50;

console.log(numero1, numero2, numero3);

//concatenacion unir dos caracteres los cuales van  a dar como resultado un string

console.log("el valor del numero 1 es:" + numero1);
console.log("el valor del numero 2 es:" + numero2);
console.log("el valor del numero 3 es:" + numero3);

/*
boolean
true or false se usa para asignar valores logicos
*/

let miBoolean1 = true;
let miBoolean2 = false;

console.log("el valor de la variable 1 es: " +  miBoolean1);
console.log("el valor de la variable 2 es: " +  miBoolean2);

/*tipo de dato null 
la variable esta vacia 
*/

let variableVacia = null;

console.log(variableVacia);

/*
tipo de valor undefined una variable esta vacia o 
nuestra variable no tiene un valor asignado, 
tal ves aun no existe  
*/

// una variable puede cambiar el tipo de valor
let variable;
console.log(variable);

variable = "hola";
console.log(variable);
