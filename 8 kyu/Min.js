// DESCRIPTION:
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//My solution:

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args) // 
    }
  }

//Math.min takes a some numbers and return the smallest one. It does not take an array. 
//So Math.min(1,2,3) works, while Math.min([1, 2, 3]), does not.

// The spread operator (...) takes an array and spreads it out over several 
//arguments. So Math.min(...[1, 2, 3]) is the same as Math.min(1, 2, 3).

