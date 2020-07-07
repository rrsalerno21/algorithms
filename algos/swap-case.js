// Write code to create a function that swaps the letter case of each character in a string.
function swapCase(string) {
    let arr = [];
    for (char of string) {
        if (char === char.toUpperCase()) {
            arr.push(char.toLowerCase());
        } else if (char === char.toLowerCase()) {
            arr.push(char.toUpperCase());
        } else {
            arr.push(char)
        }
    }
    return arr.join('');
}

// console.log(swapCase(`Luke, I am your Father & I'm 20 YEARS old`));