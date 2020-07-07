// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
var addStrings = function (num1, num2) {

  let len1 = num1.length - 1;
  let len2 = num2.length - 1;
  let sum = 0;
  let carry = 0;
  let result = [];

  while (len1 >= 0 || len2 >= 0 || carry) {

    let digit1 = len1 >= 0 ? num1.charCodeAt(len1) - 48 : 0;
    let digit2 = len2 >= 0 ? num2.charCodeAt(len2) - 48 : 0;

    sum = digit1 + digit2 + carry;
    carry = parseInt(sum / 10) % 10;
    sum = sum % 10;

    result.unshift(sum);

    len1--;
    len2--;
  }

  return result.join("");
};