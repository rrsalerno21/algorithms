// Write code to create a function that accepts a string and returns true if the string is a valid number, or false if it is not.
function isNumeric(str) {
    const acceptableDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let hasNum = false;
    let hasDec = false;

    for (char of str) {
        if (acceptableDigits.includes(char)) {
            hasNum = true;
            continue;
        }

        if (str.indexOf(char) === 0) {
            if (char === '-' || char === '+') {
                continue;
            }
        };

        if (char === '.') {
            if (hasDec === true) {
                return false;
            }

            hasDec === true;
            continue;
        }

        return false
    }

    if (hasNum) {
        return true;
    }

    return false
}

// console.log(isNumeric('123.00'));
// console.log(isNumeric('a123.00'));
