/*
    Ambito Lexio
    -> Accesibilidad que tienen las variables anidadas dentro de funciones
       y como puedo llamarlas.
*/

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  // Funcion interna
  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
