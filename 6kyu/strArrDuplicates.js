// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. 

//solution

//PREP
// P: array of strings, no spaces, lowercase. 
//R: arr of strings with no consecutive repeating ch
//E: ['aabb', 'cd'] => ['ab', 'cd']


function dup(s) {
    return s.map(num => num.replace(/(.)\1+/g, '$1'))
  };