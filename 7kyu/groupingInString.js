// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

//solution

const isConsecutive = (str) => {
    let arr = []
    let prevChar = str[0]
    for(let i = 0; i<str.length; i++){
      if(str[i] !== prevChar){
        if(arr.includes(str[i])){
          return false;
        }
        arr.push(str[i])
      }
      prevChar = str[i]
    }
    return true;
  }