// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//solution

function mergeArrays(a, b) {
  let ans = new Set()
  let max = Math.max(a.length, b.length)
  for(let num of a){
    ans.add(num)
  }
  for(let num of b){
    ans.add(num)
  }
  return Array.from(ans).sort((a,b) => a - b);
}
