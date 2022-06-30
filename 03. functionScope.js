/* 
    Function Scope.
    -> Tienen su propio alcance y las variables declaradas dentro de la funcion
       solo son accesibles dentro de la funcion y cualquiera de sus funciones 
       anidadas.
*/

function greeting() {
  let username = "Manuel";
  console.log(username);

  if (username === "Manuel") {
    console.log(`Hello ${username}!`);
  }
}

greeting();
