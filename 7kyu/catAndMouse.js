// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.


//solution

//PREP

//P: str with C and m, rest will be '.'
//R: if '.' is greater than 3 return false;


function catMouse(x){
    let str = x.replace(/[^.]/g, '')
    if(str.length > 3){
      return "Escaped!"
    }
  return "Caught!"
}