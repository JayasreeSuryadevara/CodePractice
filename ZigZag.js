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
let convert = function (str, numRows) {

  if (numRows == 1) return str;

  const len = str.length;
  const result = [];
  const step = numRows * 2 - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < len; j += step) {

      result.push(str.charAt(j + i));

      if (i != 0 && i != numRows - 1 && j + step - i < len) {
        result.push(str.charAt(j + step - i));
      }

    }
  }

  return result.join("");
};

// console.log(convert("PAYPALISHIRING",4));
console.log(convert("PAYPALISHIRING",3))

// length 14
// cycleLen 4
// i, j j + i : 0 0 0
// i, j j + i : 0 4 4
// i, j j + i : 0 8 8
// i, j j + i : 0 12 12
// i, j j + i : 1 0 1
// inside 3
// i, j j + i : 1 4 5
// inside 7
// i, j j + i : 1 8 9
// inside 11
// i, j j + i : 1 12 13
// i, j j + i : 2 0 2
// i, j j + i : 2 4 6
// i, j j + i : 2 8 10
// PAHNAPLSIIGYIR