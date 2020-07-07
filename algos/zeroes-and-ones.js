// Write code to create a function that takes in a string containing only 0s and 1s, and returning true if there are an equal number of 0s and 1s, else returning false.
function zeroesAndOnes(string) {
    let numMap = {};

    for (char of string) {
        if(!numMap[char]) {
            numMap[char] = 1;
            continue;
        };

        numMap[char]++
    }

    return numMap[0] === numMap[1];
}

// console.log(zeroesAndOnes('00110011'));
// console.log(zeroesAndOnes('10101'));
