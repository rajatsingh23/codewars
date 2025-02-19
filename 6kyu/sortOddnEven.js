// You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

// Note that zero is an even number. If you have an empty array, you need to return it.

// For example:

// [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

// odd numbers ascending:   [1, 3,       5   ]
// even numbers descending: [      8, 4,    2]

//solution

//PREP
//P: array of int, arr can be empty, int 0 is even number
//R: ascending odd, descending even
//E: 
//P: two array of same length, for empty we will add string, sort arr, merge them by creating another arr
// of same length, return arr


function sortArray(array) {
    if(array.length === 0){
      return array;
    }
    let oddArr = []
    let evenArr = []
    array.forEach((x) => {
      if( x === 0){
        evenArr.push(x)
      }else if(x % 2 === 0){
        evenArr.push(x)
    }else{
        oddArr.push(x)
    }
    })
    oddArr.sort((a,b) => a-b)
    evenArr.sort((a,b) => b-a)
    let oddCounter = 0
    let evenCounter = 0
    let newArr = []
    array.forEach((x,i) =>{
      if(x % 2 === 0){
        while(evenCounter <= i){
          newArr.push(evenArr[evenCounter])
          evenCounter++;
          break;
        }
        }else{
          while(oddCounter <= i){
            newArr.push(oddArr[oddCounter])
            oddCounter++;
            break;
          }
      }
    })
  return newArr;
  }