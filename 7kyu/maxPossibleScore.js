// You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

// Write a function that accepts

// an object of questions (as keys) and points (values)
// a sequence of new questions.
// The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

// You can assume that all questions are unique.

// Questions are case sensitive.

// Example:

// input:
// questions => {"a": 1, "b": 2, "c": 3}
// new       => ["a", "c"]
// output:
// 1 * 2 + 2 + 3 * 2 = 10

//solution

function maxPossibleScore(obj, arr) {
    console.log(obj)
    console.log(arr)
    // Good luck.
    let sum = 0
    for(let i = 0; i < Object.keys(obj).length; i++){
      if(arr.includes(Object.keys(obj)[i])){
        sum = sum + obj[Object.keys(obj)[i]] * 2
      }else{
        sum = sum + obj[Object.keys(obj)[i]]
      }
      
    }
    return sum;
  }