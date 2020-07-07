// Write code to create a function that takes a string containing space-separated words and returns the longest word in the string.
function longestWord(str) {
    const wordsArr = str.split(' ');
    let longWord = ''

    for (var i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length >= longWord.length) {
            longWord = wordsArr[i]
        }
    }

    return longWord;
}

// console.log(longestWord('I am the longest word frantically!'));