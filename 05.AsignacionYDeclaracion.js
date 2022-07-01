/* VAR 
   -> Scope global o local 
   -> Redeclarable
   -> Reasignable
*/

var firstName; // Declarando, su valor es undefined
firstName = "Manuel"; // Asignacion
console.log(firstName);

var lastName = "Valencia"; // Declarando y Asignando
lastName = "Londono"; // Reasignando
console.log(lastName);

var secondName = "Carlos"; // Declarando y Asignando
var secondName = "Carlos 2"; // Redeclaracion y Reasignacion
console.log(secondName);

/* 
   LET
   -> Scope block
   -> No redeclarable
   -> Reasignable
*/
let fruit = "Apple"; // Declarando y Asignando
fruit = "Kiwi"; // Reasignando
console.log(fruit);

// let fruit = "Banana";  No es posible redeclarar

/*
   CONST
   -> Scope block
   -> No redeclarable
   -> No reasignable
*/
const ANIMAL = "dog"; // Declarando y Asignando
//ANIMAL = "cat"; No es posible reasignar ni redeclarar
console.log(ANIMAL);

const VEHICLES = []; // Declarando y Asignando
VEHICLES.push("🚗");
console.log(VEHICLES);
