/*
    Hoisting.
    -> Eleva las variables
    -> El hosting solo aplica a variables declaradas con var, si intentamos hacer un 
       ejemplo similar con let o const tendremos errores.
    -> El hosting para funciones solo aplica para funciones declaradas usando la palabra 
       reservada function, si intentamos aplicarlo a arrow functions tendremos errores 
       también
*/

// Eleva la variable hacia arribla pero solo la declara y su value por defecto es undefined
console.log(nameOfDog);
var nameOfDog = "Moises";

// Hoisting no aplica para let o const, retorna error.
console.log(x);
let x = 10;

// Eleva la variable hacia arribla pero solo la declara y su value por defecto es undefined
nameOfDog();
function nameOfDog() {
  console.log(`El mejor gato es ${gato}`);
}
var gato = "Moises";

// Eleva la funcion hacia arriba y se ejecuta correctamente
console.log(saludo());
function saludo() {
  return "Hello";
}

// Si intentamos aplicarlo a arrow functions tendremos errores también
console.log(saludo());
const saludo = () => {
  return "Hello";
};
