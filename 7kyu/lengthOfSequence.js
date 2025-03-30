// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

//solution

var lengthOfSequence = function (arr, n) {
    if(arr.length === 2){
      return 2
    }
    let count = 0 
    let newArr = []
    arr.forEach((x, i) => {
      if(x === n){
        count++;
        newArr.push(i)
      }
    })
    console.log('count', count)
    console.log('n', n)
    console.log('arr', arr)
    if(count !== 2){
      return 0;
    }
    console.log('mnw', newArr)
    return newArr[0], newArr[1] -newArr[0] + 1
    
    
    
  };