// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

//solution

//PREP

//P: 2 Strings are given, they will always be of same length
//R: return a string with one word change at the time
//E: 'one', 'two', tne, twe, two;

function mutateMyStrings(stringOne, stringTwo){
    let arrOne = stringOne.split('')
    let arrTwo = stringTwo.split('')
    let ans = [arrOne.join('')]
      for(let i = 0; i<arrOne.length; i++){
        if(arrOne[i] != arrTwo[i]){
          arrOne[i] = arrTwo[i]
          ans.push(arrOne.join(''))
        }
        
        
      }
    return ans.join('\n') + '\n';
  }