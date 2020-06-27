// Leet code #1010
// /**
// * @param {number[]} time
// * @return {number}
// */
var numPairsDivisibleBy60 = function(time) {
    let map = {};
    let count = 0;
    for (let el of time){
        let mod = el % 60;
        let leftover = (60 - mod) % 60;
        console.log("el :", el,"mod :",  mod,"leftover :", leftover)
        count += map[leftover] ? map[leftover] : 0;
        console.log("count :", count);
        map[mod] = map[mod] ? map[mod] + 1 : 1;
        console.log(map);
    }
    return count;

};

print(numPairsDivisibleBy60([30,20,150,100,40]);
