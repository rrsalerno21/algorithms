function fizzBuzz(arr) {
    for (num of arr) {
        if ((num % 3 === 0) && (num % 5 === 0)) {
            console.log('Fizz Buzz');
        } else if (num % 3 === 0) {
            console.log('Fizz');
        } else if (num % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(num)
        }
    }
};

// fizzBuzz([1, 3, 5, 9, 10, 15, 2, 6, 7]);
