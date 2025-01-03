// You received an array with two strings.
// Create a function that will return their product as a string.
// E.g.

// input: ['3', '5'] => output: '15'
// input: ['2', '-3'] => output: '-6'
// input: ['9', '0'] => output: '0'


//solution

function arrMultiply(arr){
    //your solution
    let a = 1;
   arr.forEach((x) => a = a * Number(x));
   
   return String(a)
 }