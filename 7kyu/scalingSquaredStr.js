// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".


//solution

//PREP
//P: str, k-horizontal, n-vertical, str can be empty, k,n always positivie
//R:'abc',1,1 abc
//E: same as above




function scale(str, k, n) {
    if (str === "") return ""; // Handle empty string case

    // Step 1: Horizontal scaling (repeat each character k times)
    let kStr = str.split('\n')
                  .map(line => line.split('').map(char => char.repeat(k)).join(''))
                  .join('\n');

    // Step 2: Vertical scaling (repeat each line n times)
    let nStr = kStr.split('\n')
                   .map(line => Array(n).fill(line).join('\n')) 
                   .join('\n');

    return nStr;
}




