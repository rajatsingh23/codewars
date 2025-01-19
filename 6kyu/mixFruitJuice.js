// Story
// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

// Input
// The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

// Example
// ['Mango', 'Banana', 'Avocado'] //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)


//solution

//PREP

//Parameter: Regular fruits: $5, Special Fruits: $7, Extra Specail Fruits: $9
// RF: Banana, orange, Apple, Lemon and Grapes
// SF: Avocado, Strawberry and Mango
// ESF: any other than this
// cup is mean
// arr of fruits, 

//Return: Nearest integer of the mean

// E: apple, mango, coconut => 5+7+9/3 => 7


function mixFruit (arr) {
    let cup = [];
    arr = arr.map((x) => x.toLowerCase())
    for(let i =0; i<arr.length; i++){
      if(arr[i] === "banana" || arr[i] === "orange" || arr[i] === "apple" || arr[i] === "lemon" || arr[i] === "grapes"){
        cup.push(5)
      }else if(arr[i] === "avocado" || arr[i] === "strawberry" || arr[i] === "mango"){
        cup.push(7)
      }else{
        cup.push(9)
      }
    }
  let mean = (cup.reduce((a,b) => a+b, 0)) / cup.length;
  
  return Math.round(mean)
}
