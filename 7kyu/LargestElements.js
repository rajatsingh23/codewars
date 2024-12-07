// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


//solution

function largest(n, array) {
    // Find the n highest elements in a list
    let sortarr = array.sort((a,b) => a-b);
    
    return sortarr.splice(sortarr.length-n, sortarr.length);
  }