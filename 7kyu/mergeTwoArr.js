// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).


//solution

function mergeArrays(a, b) {
    // your code here
    let newArr = []
    for(let i = 0; i<Math.max(a.length, b.length); i++){
      if(i<a.length && i<b.length){
        newArr.push(a[i]);
        newArr.push(b[i]);
      }else if(i<b.length){
        newArr.push(b[i]);
      }else if(i<a.length){
        newArr.push(a[i])
      }
      
      
    }
    return newArr;
  }