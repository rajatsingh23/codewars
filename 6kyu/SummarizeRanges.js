// Given a sorted array of numbers, return the summary of its ranges.

// Examples
// [1, 2, 3, 4] ==> ["1->4"]
// [1, 1, 1, 1, 1] ==> ["1"]
// [0, 1, 2, 5, 6, 9] ==> ["0->2", "5->6", "9"]
// [0, 1, 2, 3, 3, 3, 4, 5, 6, 7] ==> ["0->7"]
// [0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10] ==> ["0->7", "9->10"]
// [-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12] ==> ["-2", "0->7", "9->10"]

//solution


function summaryRanges(arr) {
    console.log(arr)
    let newArr = Array.from(new Set(arr))
    if(newArr.length === 1){
        return [`${newArr[0]}`]
    }
    let strArr = []
    for(let i = 0; i<newArr.length; i++){
        if(i === newArr.length -1){
          strArr.push(`${newArr[i]}`)
          break;
        }
        if(newArr[i+1] - newArr[i] !== 1){
            strArr.push(`${newArr[i]}`)
           
            
        }else{
           let counter = i;
            while(newArr[counter+1] - newArr[counter] === 1 ){
                counter++;
            }
            strArr.push(`${newArr[i]}->${newArr[counter]}`)
            i = counter;
        }
        
    }
    return strArr;
  }
  