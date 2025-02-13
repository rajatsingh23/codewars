// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"


//solution

//PREP 
//P: string, no empty string, words with spaces, cannot be empty string,
// if 'i' || 'I' put 1
//if "o" || "O" put 0
//if "s" || "S" put 5
// R: make an arr split with spaces, make an empty arr and push first ch of the strings from arr, if statement for each and then return join
// E: "Give me One" => 'Gm0'


function makePassword(phrase) {
    // Your code here
    let arr = phrase.split(' ')
    let newArr = []
    arr.forEach((x) => newArr.push(x[0]))
    let mapArr = newArr.map((x) =>{
      if(x === 'i' || x === 'I'){
       return  x = '1'
      }else if(x === 'o' || x === "O"){
        return x = '0'
      }else if(x === 's' || x === 'S'){
        return x = '5'
      }
      return x;
    })
    return mapArr.join('')
  }