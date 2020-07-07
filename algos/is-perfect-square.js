// Write  code to create a function that takes in a whole number, and returns true if the number is a perfect square, otherwise returns false.
function isPerfectSquare(num) {
    let factors = [];

    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    };

    for (factor of factors) {
        if (factor * factor === num) {
            return true;
        }
    }

    return false;
}

// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(7));