/* Variables */

var a; // Declarando
var b = "b"; // Declaramos y asignamos
b = "bb"; // Reasignando
var a = "aa"; // Redeclaracion

/* 
    Global Scope.
    -> Cualquier variable que se encuentre en el documento (fuera de un bloque) 
       pasan a ser variables globales.
*/

// Example 1
var fruit = "apple"; // Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

// Example 2
function countries() {
  /* 
    Si no declaramos una variable (estemos donde estemos), inmediatamente se 
    convierte en variable global 
  */
  country = "Colombia"; // Asignando
  console.log(country);
}

countries();
console.log(country);
