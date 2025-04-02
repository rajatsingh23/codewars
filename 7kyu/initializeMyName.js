// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//solution

function initializeNames(name){
    // Insert your brilliant code here
    
    if(name.split(' ').length <= 2){
      return name;
    }
    let arr = name.split(' ').map((x,i) =>{
      if(i === 0 || i === name.split(' ').length-1){
        return x
      }
      return x.charAt(0) + '.'
    })
    return arr.join(' ')
  }