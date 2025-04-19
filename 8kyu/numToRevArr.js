// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

//solution

function digitize(n) {
    //code here
    console.log(n)
    let arr = []
    let num = 0
    while(n >= 10){
      num = n % 10
      arr.push(num)
      n = Math.floor(n/10)
    }
    arr.push(n)
    return arr
  }