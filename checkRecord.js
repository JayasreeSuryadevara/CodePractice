// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var checkRecord = function (s) {
  let acount = 0;
  let lcount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") acount++;
    if (s[i] === "L" && (i > 0 && s[i - 1] === "L")) lcount++;
    if (lcount === 1 && s[i + 1] !== "L") lcount--;
  }

  return acount <= 1 && lcount <= 1;
};