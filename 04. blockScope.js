/* 
    Block Scope.
    -> Las variables definidas dentro de un bloque solo pueden ser utilizadas 
       dentro del bloque. (Con esto se busca dejar de utilizar la palabra reservada
       var)
*/

function fruits() {
  if (true) {
    // Bloque
    var fruit1 = "Aplle"; // Function Scope
    let fruit2 = "Kiwi"; // Block Scope
    const fruit3 = "Banana"; // Block Scope

    console.log(fruit2);
    console.log(fruit3);
  }

  console.log(fruit1);
  //   console.log(fruit2); Error
  //   console.log(fruit3); Error
}

fruits();
