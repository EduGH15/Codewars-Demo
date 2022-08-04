// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//My Solution:

function grow(array){
    return array.reduce((a,b) => a*b);
  }
  
  // El método reduce(previousValue, currentValue) ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
  
//Other solutions:

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

//-----------------------------------------------------------------------
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };

//----------------------------------------------------------------------------
function grow(x){
  
    var sum = x.reduce(function (a, b) {return a * b;});
      
      return sum
}   