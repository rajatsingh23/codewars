// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


//solution


//PREP
//P: we are given an integer we have to return n*n multiplication table
//R: return n*n multiplication table
//E: 3 should give [[1,2,3],[2,4,6],[3,6,9]]
//P: let arr = empty arr, for i i less than size push in arr, let newArr =[[arr]] for each we will mulitply 
//and push in this arr



function multiplicationTable(size) {
    let arr = []
    for(let i = 1; i<=size; i++){
      arr.push(i)
    }
    let newArr = [arr]
    for(let j = 2; j<=size; j++){
      newArr.push(arr.map((x) => x*j))
    }
    return newArr; 
  }
  