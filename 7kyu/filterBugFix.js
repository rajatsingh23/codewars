// Failed Filter - Bug Fixing #3
// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the Filter Number function to remove all the numbers from the string.

//solution

var FilterNumbers = function(str) {
    return str.split('').filter((c,i) => isNaN(c)).join('');
  }