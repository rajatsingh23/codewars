// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

// For example, the following call:

// getRectangleString(3, 3);
// Should return the following string:

// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.

//solution


function getRectangleString(width, height) {
    let rectangle = "";

  for (let row = 0; row < height; row++) {
      if (row === 0 || row === height - 1) {
          // Top or bottom border
          rectangle += "*".repeat(width);
      } else {
          // Middle rows
          rectangle += "*" + " ".repeat(width - 2) + "*";
      }
      // Add a carriage return-line feed at the end of each row
      rectangle += "\r\n";
  }

  return rectangle;
return "";
}