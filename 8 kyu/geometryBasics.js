//This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

//My solution:

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);  //Devuelve la norma entre dos puntos
  }

//Other solutions:

distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

//---------------------------------------------------------------------------------------
function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
//---------------------------------------------------------------------------------------

function distanceBetweenPoints(a, b) {
    const pointOne = a;
    const pointTwo = b;
    
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
    
    const differenceX = pointTwo.x - pointOne.x
    const differenceY = pointTwo.y - pointOne.y
    const tempSum = Math.pow(differenceX, 2) +  Math.pow(differenceY, 2);
    const distance = Math.sqrt(tempSum);
    return distance;
  }