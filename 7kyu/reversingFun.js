// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

// Input:
// A string of length 1 - 1000

// Output:
// A correctly reordered string.

//solution


//PREP
//P: string from number 1-1000, no nill str, str is given in continous pattern
//R: return reverse of the string
//E: "123",321, 312, 

function flipNumber(str) {
    let arr = str.split("").reverse();
    
    for (let i = 1; i < arr.length; i++) {
        let subArray = arr.slice(i).reverse();
        arr.splice(i, arr.length - i, ...subArray);
    }
    
    return arr.join("");
}