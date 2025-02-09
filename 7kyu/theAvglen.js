// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


//solution


function averageLength(array) { 
    let strlen = array.reduce((sum, str) => sum + str.length, 0);
    let avg = Math.round(strlen / array.length);
  
    return array.map((x) => {
      if (x.length < avg) {
        return x.padEnd(avg, x[0]); // Repeat first character until avg length
      } else {
        return x.slice(0, avg); // Trim string to avg length
      }
    });
  }
  