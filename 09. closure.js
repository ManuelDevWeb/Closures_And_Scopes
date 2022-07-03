/*
    Closure.
    -> De forma sencilla, en JavaScript un Closure se crea cuando tenemos una funcion 
       (Padre) y dentro tenemos funciones (Hijas), es decir tenemos funciones anidadas.
       Luego gracias al “Ambito Lexico” podemos tener acceso a las variables de la 
       funcion “Padre” desde la funcion “Hijo”.
    -> Un closure es cuando una función accede a una variable fuera de su contexto.
    -> Las funciones acceden a variables fuera de su contexto y las recuerdan
*/

/* ERROR */
// function moneyBox(coins) {
//   let saveCoins = 0; // Declarando y asignando
//   saveCoins += coins; // Reasignando

//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);
// moneyBox(5);

/* Example 1 */
function moneyBox() {
  let saveCoins = 0; // Declarando y asignando

  function countCoins(coins) {
    saveCoins += coins; // Reasignando
    console.log(`MoneyBox: $${saveCoins}`);
  }

  return countCoins;
}

const myMb = moneyBox();
myMb(5);
myMb(5);
myMb(5);
myMb(5);

const otherMb = moneyBox();
AnaMb(10);
AnaMb(20);
AnaMb(30);

/* Example 2 */
function closureExample() {
  let _number = 0;

  function increase(num) {
    return (_number += num);
  }

  function decrease(num) {
    if (num >= _number) {
      return (_number = 0);
    } else {
      return (_number -= num);
    }
  }

  function getNumber() {
    return _number;
  }

  function setNumber(num) {
    return (_number = num);
  }

  return {
    increase,
    decrease,
    getNumber,
    setNumber,
  };
}

const calc = closureExample();

calc.setNumber(12);
calc.increase(4);
calc.decrease(6);
//console.log(calc.setNumber(25));
console.log(calc.getNumber());

const calc1 = closureExample();
calc1.setNumber(30);
console.log(`la calculadora 2 tiene como numero: ${calc1.getNumber()}`);
