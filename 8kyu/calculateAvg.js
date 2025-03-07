// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.


//solution

function findAverage(array) {
    // your code here
    if(array.length === 0){
      return 0;
    }
    let sum = array.reduce((a,b) => a + b , 0)
    let length = array.length;
    return sum / length;
  }