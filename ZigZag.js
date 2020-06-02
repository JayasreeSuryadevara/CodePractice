// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
// of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//   P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
var convert = function (s, numRows) {

  var length = s.length;
  console.log("length", length);
  if (numRows == 1) return s;
  var cycleLen = numRows * 2 - 2;
  console.log("cycleLen", cycleLen);
  var aZig = [];
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j + i < length; j = j + cycleLen) {
      console.log("i, j :", i , j);
      aZig.push(s.charAt(j + i));
      if (i != 0 && i != numRows - 1 && j + cycleLen - i < length) {
        aZig.push(s.charAt(j + cycleLen - i));
      }
    }
  }

  return aZig.join("");
};

// console.log(convert("PAYPALISHIRING",4));
console.log(convert("PAYPALISHIRING",3))