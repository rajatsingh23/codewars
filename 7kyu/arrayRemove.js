// Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

// Go ahead and make one.

// var someArray = [1, 2, 3];
// someArray.remove(1);
// This should remove the element on index 1 making someArray = [1, 3]

// You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.

//solution


//PREP:
//P: given an index, it can be string or number, can be negative
//R: return an array with removed index
//E: [1,2,3] => arr.remove(1) => 1,3
//P: we will check if an array is integer || less than 0 then we will return original arr
// iterate through the array and skip the one not needed
// or we can use fitler to remove the specific index




Array.prototype.remove = function(index) {
    if(!Number.isInteger(index) || index < 0){
      return this;
    }
    this.splice(index, 1);
    return this;
  };