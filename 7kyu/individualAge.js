// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

//solution

function getAges(sum,difference){
    let arr = []
    let x = (sum + difference ) / 2;
    let y = sum - x;
    if(sum<0 || difference < 0 || x < 0 || y < 0) {
      return null;
    }
    if(x >= y){
      arr.push(x)
      arr.push(y)
    }
      if(y>x){
      arr.push(y)
      arr.push(x)
    }
    return arr
  };