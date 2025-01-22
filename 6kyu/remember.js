// Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

// If a charater is repeated more than once, only show it once in the result array.

// Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

// Characters are case sensitive.

// For F# return a "char list"

// Examples:
// remember("apple") => returns ["p"]
// remember("apPle") => returns []          // no repeats, "p" != "P"
// remember("pippi") => returns ["p","i"]   // show "p" only once
// remember('Pippi') => returns ["p","i"]   // "p" is repeated first

//solution

//PREP

//P: string, string can contain caplocks, string contain mulitple same character, it can be empty, also contain spaces
//R: return arr of the duplicate characters, capital character are not same, first duplicate should be added first in the returning array
//E: ""Lluul", ['u', 'l']
//how: we can convert str to arr, iterate over array to push to the string;

function remember(str) {
    let arr = str.split('');
    let newArr = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        // If the character has already been added to newArr, skip it
        if (newArr.includes(arr[i])) continue;

        // Check if it's a duplicate
        if (seen.has(arr[i])) {
            newArr.push(arr[i]); // Add it to newArr if it hasn't been added yet
        } else {
            seen.add(arr[i]); // Mark as seen
        }
    }

    return newArr;
}