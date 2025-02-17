// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

//solution


//PREP
//P: array of words, it can be empty
//R: return new string with nth letter where n is position of that string in the array
//E: ["a", "ab", "abc"] => abc
//P: make a new arr, for x i we will push x[i]


function nthChar(words){
    let arr = []
    words.forEach((x,i) => arr.push(x[i]))
   return arr.join('')
  }