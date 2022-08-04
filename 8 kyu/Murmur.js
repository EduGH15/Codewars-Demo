// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My solutions:

var countSheep = function (num){
    let string = "";
    let contador = 0;
    while(contador < num && num >0){
      string += `${contador+1} sheep...`;
      contador++;
    }
    return string;
   }

//---------------------

var countSheep = function (num){
    let string = "";    
     for(let i = 1; i<num;i++){
       string += `${i} sheep...`
     }
     return string;
   }

//Other solutions:

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``;

//------------------------------------

const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('');