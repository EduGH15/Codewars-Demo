DESCRIPTION:
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty

//My solution:

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

//Other solutions:

const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

//-----------------------------------------------------------------------------------------------

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }