// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//solution

//PREP
//P: string, non empty, any character, space can be given, don't need to remove the spaces,
//R: If the string.length is odd return middle, else return middle two charcters
//E: "string", 'r', 'i', return a string
//P: we can convert string to arr, if arr.length is even 12345678 for even divide by two and plus one,
// for odd 123, 12345, 1234567 Math.ceil(arr.length/2)

function getMiddle(s) {
    let arr = s.split('')
    let str = ''
    if(arr.length % 2 === 0){
      str = str + arr[arr.length/2-1] + arr[arr.length/2]
    }else{
      str = str + arr[Math.floor(arr.length/2)]
    }
      return str;
  }