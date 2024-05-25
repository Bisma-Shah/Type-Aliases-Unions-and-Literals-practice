// 1. Type Aliases in string number and boolean:
var studentName = "Bisma Shah";
var totalMarks = 500;
var isPassed = true;
console.log(studentName); // Output: Bisma Shah
console.log(totalMarks); // Output: 500
console.log(isPassed); //  // Output: true
// 2. Type Unions in string and number:
var digit = "Bisma";
digit = 12345;
digit = "123";
digit = undefined;
// digit = boolean    // Error boolean datatype is not assignable to Type Union:
console.log(digit);
// Type Literals in Multiple Values:
var rgbColors;
rgbColors = "Red";
rgbColors = "Green";
rgbColors = "Blue";
// rgbColors = "Yellow"; // Error "Yellow" Color are not assignable to Type Literal:
console.log(rgbColors);
