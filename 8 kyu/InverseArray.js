// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


//My solution:

function digitize(numbers){
    return String(numbers).split("").map(Number).reverse()
  }

//   String()
//   Crea un nuevo objeto String. Realiza la conversión de tipos cuando se llama como función, en lugar de como constructor, lo cual suele ser más útil.

//split("")
// El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

//map()
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

//reverse()
// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

// other solutions:

function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

//------------------------------------------------------
const digitize = (x) => {
    x = `${x}`.split('').reverse();
    let a = []
    for(let i = 0; i < x.length; i++){
      a.push(+x[i])
    }
    return a
  }