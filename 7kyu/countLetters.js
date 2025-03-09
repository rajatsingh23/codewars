// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1


//solution


function countLettersAndDigits(input) {
    let arr = input.toLowerCase().split('')
    console.log(arr)
    let newArr = arr.filter((x) => x == 'a' || x == 'b' || x == 'c' || x == 'd' || x == 'e' || x == 'f' || x == 'g' || x == 'h' || x == 'i' || x == 'j' || x == 'k' || x == 'l' || x == 'm' || x == 'n' || x == 'o' || x == 'p' || x == 'q' || x == 'r' || x == 's' || x == 't' || x == 'u' || x == 'v' || x == 'w' || x == 'x' || x == 'y' || x == 'z'
                 ||  x == '1' || x == '2' || x == '4' || x == '3' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' || x == '0'
              )
    
    return newArr.length;
  }