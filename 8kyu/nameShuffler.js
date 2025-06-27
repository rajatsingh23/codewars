// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//solution

function nameShuffler(str){
  let arr = str.split(' ')
  return arr.reverse().join(' ')
}