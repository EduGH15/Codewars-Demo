// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//My solutions:

function maps(x){
    let newX = [];
    let value;
    for(let i = 0; i < x.length; i++){
      value = x[i]*2;
      newX.push(value);
    }
    return newX;
  }

//-----------------------------------

function maps(array){
    let newArray = array.map(function(num){
      return num*2;
    })
    return newArray;
  }

// Other solutions:

function maps(x){
    return x.map(n => n * 2);
  }

//---------------------------------

maps = x => x.map(e => e * 2);