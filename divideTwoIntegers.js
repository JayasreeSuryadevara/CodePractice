// Given two integers dividend and divisor, divide two integers without using 
// multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its 
// fractional part.For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10 / 3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7 / -3 = truncate(-2.33333..) = -2.
// Note:

// Both dividend and divisor will be 32 - bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could only store integers within 
// the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this 
// problem, assume that your function returns 231 − 1 when the division result overflows.

// var divide = function(dividend, divisor) {

//         if (Math.abs(divisor) === 1) {
//           if(dividend < 0 && divisor < 0){
//             return dividend
//           } else if ( dividend < 0 || divisor < 0){
//             return -dividend;
//           }
//         }
//             let count = 0;
//             let dividendAbs = Math.abs(dividend);
//             let divisorAbs = Math.abs(divisor);

//             while (dividendAbs >= divisorAbs) {
//                 dividendAbs -= divisorAbs;
//                 count += 1;
//             }

//             if (dividend < 0 && divisor < 0) {
//                 return count;
//             } else if (dividend < 0 || divisor < 0) {
//                 return -count;
//             }

//             return count;
//         };

//         (2 ** 31 - 1, 1)



// var divide = function (dividend, divisor) {
//   // only one edge case that would cause overflow : dividend : -2**32, divisor: -1
//   if (dividend === -2147483648 && divisor === -1) return 2147483647;
//   // the following case is an edge case in JS only
//   if (dividend === -2147483648 && divisor === 1) return dividend;

//   let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
//   for (let i = 31; i >= 0; i--) {
//     // There are some situations we need to be clear about:
//     // 1. 1 << 31 equals to -2147483648
//     // 2. a = Math.abs(dividend) may makes a equal to 2147483648, which is out of the range of 32-bits
//     // 3. 2147483648 >> i (0<=i<=31) will be negative numbers
//     // so we need to do two things:
//     // 1. add Math.abs() below to get positive numbers as we would expect;
//     // 2. the second edge case above is separated alone because when a === 1 << 31 and b  === 1, 
//     //    the following res will be 1 << 31, too, which will turn into 2147483648 
//     //    after we add a sign in front of it (at the return part), and get a wrong answer.
//     if (Math.abs(a >> i) - b >= 0) {
//       res += 1 << i;
//       a -= (b << i);
//     }
//   }
//   return (dividend > 0) ^ (divisor > 0) ? -res : res;
// };


var divide = function (dividend, divisor) {

  const MIN_INT = -2147483648;
  const MAX_INT = 2147483647;

  if (divisor == 0) return 0;
  let i = 0;

  sign1 = 1;
  sign2 = 1;

  if (dividend < 0) { dividend = -dividend; sign1 = -1; }
  if (divisor < 0) { divisor = -divisor; sign2 = -1; }

  while (dividend >= divisor) {

    let times = 1;
    let diver = divisor;
    console.log("times ", times, "divisor ",diver )
    while (diver + diver <= dividend) {
      diver += diver;
      times += times; // times *= 2;
      console.log("diver ", diver, "times ", times)
    }

    i += times;
    dividend -= diver;
    console.log("i ", i, "dividend ", dividend)
  }

  if (sign1 + sign2 == 0) i = -i;
  if (i > MAX_INT) i = MAX_INT;

  return i;
};

console.log(divide(10, 2))