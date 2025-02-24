// Write a function that:

// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

//solution

function isIntArray(arr) {
  
    if(!Array.isArray(arr)){
      return false;
    }
    if(arr.length === 0){
      return true;
    }
    if(arr.includes(NaN)){
      return false;
    }
    let a = arr.every((x) => Number.isInteger(x))
    console.log(arr)
    return a;
  }