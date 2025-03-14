// There are many kinds of links to the video:

// https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

// https://www.youtube.com/watch?v=UN8oLGBNXpE

// http://www.youtube.com/watch?v=UN8oLGBNXpE

// https://youtu.be/UN8oLGBNXpE
// If we insert the first link in the iframe, it works, but another do not work.

//solution

function makeYoutubeLink(str){
 
  
    if(str.includes('watch')){
      let newArr = str.split('=').pop()
    
      return 'https://www.youtube.com/embed/' + newArr
    }
    let arr = str.split('/').pop()
    
    return 'https://www.youtube.com/embed/' + arr
    
  }