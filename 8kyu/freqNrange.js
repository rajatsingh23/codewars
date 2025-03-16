// We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:

// they are present in both ones

// they occur more than once in A and more than once in B

// their values are within a given range (inclusive)

// they are odd or even according as it is requested

// Example
// Given two arrays, a range, and a wanted parity:

// arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
// arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
// rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
// wanted = "odd"
// Process to obtain the result:

// 0, 1, 2, 3, 7, are the numbers present in arrA and arrB
// 1, 2, 3, 7,  occur twice or more in arrA and arrB
// 1, 2, 3,  are in the range [-4, 4]
// 1, 3, are odd
// output = [1, 3] 
// For the case:

// arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
// arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
// rng = [-4, 4]
// wanted = "even"
// output = [0, 2, 4] 
// If there are no elements that fulfill the constraints given above, the result will be an empty array.

// Features of the tests:

// Number of Random Tests = 300
// Length of the arrays A and B between 1000 and 10000
// You may assume that you will always receive valid entries for all the tests

//solution

//PREP
//P: two arr with different numbers, string with odd or even, rang for the value, occurence
//R: return an arr within range, more than once, and common in both, and even or odd
//P: new arr arr.filter(include), let current value, currentVal = arr[i],
//if arr.slice.include(arr[i])  and in the range push to new arr
// return filtered arr on the basis of wanted

function findArr(arrA, arrB, rng, wanted) {
    const freqA = {};
    const freqB = {};
    arrA.forEach(x => freqA[x] = (freqA[x] || 0) + 1);
    arrB.forEach(x => freqB[x] = (freqB[x] || 0) + 1);
    let arr = arrA.filter((x) => arrB.includes(x))
    let newArr = []
    for(let i = 0; i<arr.length; i++){
      if(freqA[arr[i]] > 1 && freqB[arr[i]] > 1 && !newArr.includes(arr[i]) && arr[i] >= rng[0] && arr[i] <= rng[1]){
        newArr.push(arr[i])
      }
      
    }
    if(wanted === "odd"){
      return newArr.filter((x) => x % 2 !== 0).sort((a,b) => a-b)
    }else{
      return newArr.filter((x) => x % 2 === 0).sort((a,b) => a-b)
    }
  }