// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//My solution

function switcher(x){
    let str = ''
    let arr = [
    'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 
    'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 
    'd', 'c', 'b', 'a', '!', '?', ' '
  ]
    x.forEach((x) => str += arr[x-1])
    return str;
  }

  