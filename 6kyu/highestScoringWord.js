// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//solution

//PREP
//P: string of words all will be lowercase, valid input
//R: a word with highest alphabatical value
//E: "a bc" => bc
//P: create arr of words, find alphabatical value for each ch and then add them and push to new arr
// we will return words arr index of new pushed arr



function high(x){
    let arr = x.split(' ')
    let newArr = []
    arr.forEach((a) =>{
      let counter = 0;
      for(let i = 0; i<a.length; i++){
        
        counter = counter + a.charCodeAt(i) - 96;
      }
      newArr.push(counter)
    })
    let max = Math.max(...newArr)
    return arr[newArr.indexOf(max)]
  }