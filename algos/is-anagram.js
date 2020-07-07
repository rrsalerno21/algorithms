// Write code to create a function that takes in two strings and returns true if one string is an anagram of another string, otherwise return false.
// An anagram is a word or phrase made by rearranging the letters of another word or phrase.
function isAnagram(str1, str2) {
    const obj1 = {};
    const obj2 = {};

    for (char of str1) {
        if (!obj1[char]) {
            obj1[char] = 1
            continue;
        };

        obj1[char]++
    }

    for (char of str2) {
        if (!obj2[char]) {
            obj2[char] = 1
            continue;
        };
        
        obj2[char]++
    };

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false
    };

    for (key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(isAnagram('nnjjdyus', 'njdnsjyu'));
// console.log(isAnagram('annjjdyus', 'fnjdnsjyu'));
