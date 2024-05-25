// 1. Type Aliases in string number and boolean:

type StudentName = string;
type TotalMarks = number;
type IsPassed = boolean;

let studentName: StudentName = "Bisma Shah";
let totalMarks: TotalMarks = 500;
let isPassed: IsPassed = true;

console.log(studentName);  // Output: Bisma Shah
console.log(totalMarks);   // Output: 500
console.log(isPassed);     // Output: true

// 2. Type Unions in string and number:

let digit: string | number | undefined = "Bisma"

digit = 12345; 
digit = "123";
digit = undefined;
digit = boolean    // Error boolean type is not assignable to Type Unions:
console.log(digit);   // Output: undefined

// Type Literals in Multiple Values:

let rgbColors: "Red" | "Green" | "Blue"

rgbColors = "Red";
rgbColors = "Green";
rgbColors = "Blue";
rgbColors = "Yellow"; // Error "Yellow" Color are not assignable to Type Literals:
console.log(rgbColors);  // Output: Blue







