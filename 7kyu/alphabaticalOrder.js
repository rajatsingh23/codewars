// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)

//solution

function alphabetic(s) {
    let arr = s.split('')
    arr = arr.sort()
    return s === arr.join('');
  }