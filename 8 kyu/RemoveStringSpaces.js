//Simple, remove the spaces from the string, then return the resultant string.

// My solution:

function noSpace(x){
    let string1 = x;
    let string2 = string1.split(" ").join("");
    return string2;
  }
  
  // El método split() divide una cadena en un array y devuelve el nuevo array.
  
  // El método join() devuelve una nueva cadena concatenando todos los elementos de un array.
  
//Other solutions:

function noSpace(x){
    return x.replace(/\s/g, '');
  }

//---------------------------------------------------

function noSpace(x){return x.split(' ').join('')}

//------------------------------------------------------

const noSpace = x => x.replace(/ /g, "");