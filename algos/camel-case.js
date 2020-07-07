// Write  code to create a function that takes a string and returns the string in camelCase.
function camelCase(str) {
    let words = str.split(' ');
    let result = '';
    let firstChar = true;

    for (var i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === ' ') {
            continue;
        }

        if (firstChar && char !== ' ') {
            firstChar = false;
            result += char.toLowerCase();
            continue;
        };

        if (str[i-1] === ' ') {
            result += char.toUpperCase();
            continue;
        };

        result += char;
    }

    return result
}


// console.log(camelCase('Hey there you animal'));
// console.log(camelCase('   I am an animal'));

