// You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.



//solution

function matchArrays(v,r){
    let count = 0;
    v.forEach((x) => {
      if(r.includes(x)){
        count++;
      }
    })
  
  return count;
}