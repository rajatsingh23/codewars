// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example
// arrayLowerCase(['Red', 'Green']) == ['red', 'green']
// arrayLowerCase([1, 'Green']) == [1, 'green']

function arrayLowerCase(arr) {
    // return array of strings in lowercase
    return arr.map((x) => {
      if(typeof x === "string"){
       return x = x.toLowerCase()
      }
      return x
    })
  }