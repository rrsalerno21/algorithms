function isPalindrome(string) {
    // or more concise
    var reversedString = string
        .split('')
        .reverse()
        .join('');

    return string === reversedString;
};

// console.log(isPalindrome('hannah'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('rocky'));

