// Let's define a function f(s) over a non-empty string s, which calculates the frequency of 
// the smallest character in s. For example, if s = "dcce" then f(s) = 2 
// because the smallest character is "c" and its frequency is 2.

// Now, given string arrays queries and words, return an integer array answer,
//  where each answer[i] is the number of words such that f(queries[i]) < f(W), 
// where W is a word in words.

//   Example 1:

// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

//   Example 2:

// Input: queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"]
// Output: [1, 2]
// Explanation: On the first query only f("bbb") < f("aaaa").
// On the second query both f("aaa") and f("aaaa") are both > f("cc").


//   Constraints:

// 1 <= queries.length <= 2000
// 1 <= words.length <= 2000
// 1 <= queries[i].length, words[i].length <= 10
// queries[i][j], words[i][j] are English lowercase letters.

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
var numSmallerByFrequency = function(queries, words) {
    let mappedQueries = queries.map(el => smallestChar(el));
    let mappedWords = words.map(el => smallestChar(el));

    let result = [];
    for (let i = 0; i < mappedQueries.length; i++) {
        let count = 0;
        for (let j = 0; j < mappedWords.length; j++) {
            let first = mappedQueries[i];
            let second = mappedWords[j];
            if (first < second) count++;
        }
        result.push(count);
    }
    return result;
};

// Find the smallest alphabet
function smallestChar(s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let smallestChar = s[0];
    let idx = alpha.indexOf(smallestChar);
    for (let i = 0; i < s.length; i++) {
        let idx2 = alpha.indexOf(s[i]);
        if (idx2 < idx) {
            smallestChar = s[i];
            idx = idx2;
        }
    }
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === smallestChar) count++;
    }
    return count;
}

// console.log(smallestChar("erageh"));
// console.log(createMap("erageh"));
console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));

let queries = ["bbb", "cc"]
let  words = ["a", "aa", "aaa", "aaaa"]

console.log(numSmallerByFrequency(queries, words));
