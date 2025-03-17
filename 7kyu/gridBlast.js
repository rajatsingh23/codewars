// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

// ["top left",    "top middle",    "top right",
//  "middle left", "center",        "middle right",
//  "bottom left", "bottom middle", "bottom right"]
// HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

// Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

// x = 0, y = 0 --> "top left"
// x = 1, y = 2 --> "bottom middle"
// etc


//solution

//              THE BATTLEFIELD GRID

//
function fire(x,y) {
    // YOUR CODE HERE.
     console.log('x', x)
     console.log('y', y)
     let arr =  [['top left',    'top middle',    'top right'],
    ['middle left', 'center',        'middle right'],
    ['bottom left', 'bottom middle', 'bottom right']]
     return arr[y][x]
   }