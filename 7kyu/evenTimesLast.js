// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

//  solution

function evenLast(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    // Calculate sum of even numbers
    let sum = numbers.filter((x,i) => i % 2 === 0).reduce((a, b) => a + b, 0);
    
    // Multiply by the last element if the array is not empty
    return sum * numbers[numbers.length - 1];
  }