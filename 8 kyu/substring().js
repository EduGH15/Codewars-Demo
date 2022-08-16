// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//my solution: 

function removeChar(str){
    let newString = str.substring(1,str.length-1);
    return newString;
  }

//   Como el nombre indica, este método nos permite recuperar una subcadena de un string. Para ello recibe dos parámetros que serán el inicio y el final de la subcadena que queremos recuperar.

//other solutions:

function removeChar(str) {
    return str.slice(1, -1);
  }

//-------------------------------------

const removeChar = str => str.slice(1,-1)