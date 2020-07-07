// Write  code to create a function that takes a string and returns an object containing the characters in the string and the number of times they appear.
function characterCount(str) {
    const obj = {};
    for (var i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (!obj[char]) {
            obj[char] = 1;
            continue;
        } else {
            obj[char]++;
        };
    }

    return obj;
}

// console.log(characterCount('Hey there jimmy'))
