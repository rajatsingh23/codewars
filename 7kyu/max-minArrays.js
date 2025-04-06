// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

//solution

//P: create an arr to store new values, create an arr to keep track of recorded values

function solve(arr){
    let newArr = []
    arr.sort((a,b) => a-b)
    console.log(arr)
    while(arr.length > 0){
      if (arr.length == 1){
        newArr.push(arr.pop())
        break;
      }
      newArr.push(arr.pop())
      newArr.push(arr.shift())
    }
  return newArr
};