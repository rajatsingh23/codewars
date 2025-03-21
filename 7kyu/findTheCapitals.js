// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

//solution

var capitals = function (word) {
	let str = word.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '0')
  let arr = []
  str.split('').forEach((x,i) =>{
    if(x === '0'){
      arr.push(i)
    }
  })
  return arr;
};