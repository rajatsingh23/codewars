// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false


//solution
function arraysSimilar(arr1, arr2) {
    if(arr1.length !== arr2.length){
      return false;
    }
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)
    let check = false;
    for(let i = 0; i <arr1.length; i++){
      if (arr1[i] === arr2[i]){
        check = true;
      }else{
        check = false;
        break;
      }
    }
    return check;
  }