// Write code to create a function that takes a string and returns a new string with all of the characters in reverse order. You are not allowed to use the built-in reverse method.
function reverseWordsNoBuiltMethod(str) {
    let result = ''

    for (var i = str.length - 1; i >= 0; i--) {
        letter = str[i];
        result += letter;
    }

    return result;
}

// console.log(reverseWordsNoBuiltMethod('Test me out, dude'));