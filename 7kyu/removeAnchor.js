// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//solution

function removeUrlAnchor(url){
    // TODO: complete
    let arr = url.split('#')
    return arr[0]
  }