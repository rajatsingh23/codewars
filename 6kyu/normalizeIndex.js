// Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty sequences should return undefined/None/null depending on the language.

// For positive numbers that are out of range, they loop around starting at the beginning, i.e.

// index = (length of array)     => return: first element of an array;
// index = (length of array) + 1 => return: second element of an array;
// index = (length of array) + 2 => return: third element of an array;
// ...
// index = 2 * (length of array) => return: first element of an array.
// For negative numbers, they loop starting from the end, i.e.

// index = -1                 => return: last element of an array;
// index = -2                 => return: second to last element of an array;
// index = -3                 => return: third to last element of an array;
// ...
// index = -(length of array) => return: last element of an array.


//solution

//PREP

//P: arr of number, int which can be pos or neg
//R: loop through the array and where the number stops there we have to give that arr number
//E: [1,2,3,4,5,6,7], 8, 

function normIndex(arr, index){
    // Check if the array is empty
        if (arr.length === 0) {
            return undefined; // Return null for empty arrays
        }
    
        const length = arr.length;
    
        // Normalize the index
        let normalizedIndex;
        if (index >= 0) {
            normalizedIndex = index % length;
        } else {
            normalizedIndex = (index % length + length) % length;
        }
    
        // Return the value at the normalized index
        return arr[normalizedIndex];
    }