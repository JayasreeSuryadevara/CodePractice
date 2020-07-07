// Leet Code #32

// var longestValidParentheses = function (s) {
//   let stack = [],max = 0;
//   for(let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(s[i]);
//     if (s[i] === ")") {
//       if (stack.length) {
//         stack.pop();
//         max += 2;
//       } else {
//         if (i+1 < s.length) max = 0;
//       }
//     }
//   }
//   return max;

// };

var longestValidParentheses = function (s) {
  let stack = [], dp = Array(s.length + 1).fill(0), max = 0
// "()(()"
  for (let i = 0; i < s.length; i++) {
    // console.log(stack);
    if (s.charAt(i) == '(') {
      stack.push(i)
    } else {
      if (stack.length != 0) {
        // console.log("Stack in else: " + stack);
        let ele = stack.pop()
        dp[i + 1] += (2 + dp[i] + dp[ele])
        max = Math.max(max, dp[i + 1])
        // console.log(ele, dp, max);
      }
    }
  }
  return max
};

console.log(longestValidParentheses("(()"));//2
console.log(longestValidParentheses(")()())"));//4
console.log(longestValidParentheses("()(())"));//6
console.log(longestValidParentheses("()(()"));//2