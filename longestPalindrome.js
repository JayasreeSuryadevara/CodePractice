// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"  


function longestPalindrome(string) {
    let str = string;
    let reversedStr = str.split("").reverse().join("");
    let strSubs = substrings(str);
    let reversedStrSubs = substrings(reversedStr);

    let hash = {};

    for (let i = 0; i < reversedStrSubs.length; i++) {
        if (strSubs.includes(reversedStrSubs[i]) && isPalindrome(reversedStrSubs[i])) {
            hash[reversedStrSubs[i].length] = reversedStrSubs[i]
        }
    }

    let maxLength = Math.max(...Object.keys(hash));
    return hash[maxLength];
}

// str = "abbacd" => substring ["abba", "ab", "ba", "bb""]
// reversedstr  = "cdabba" => substring 
// find common substring and it should be longest one

function substrings(str) {
    let subs = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let s = str.slice(i, j);
            subs.push(s);
        }
    }
    return subs;
}

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(longestPalindrome("abbacdb"))
console.log(longestPalindrome("abbacddcab"))