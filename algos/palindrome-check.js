function isPalindrome(string) {
    let backArr = [];

    for (var i = string.length - 1; i >= 0; i--) {
        backArr.push(string[i])
    }

    console.log(backArr);

    return string === backArr.join('');
};

// console.log(isPalindrome('hannah'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('rocky'));

