// Write code to create a function that takes a number and returns a new number that satisfies the look-and-say-sequence.
// The look and say sequence can be understood by reading a number out loud, digit by digit, but first saying the number of times each digit appears in a row.
// Ex: lookAndSaySequence(5442)
function lookAndSaySequence(num) {
    let str = num.toString();
    let result = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            continue;
        };

        let count=1;
        while (str[i] === str[i+count]) {
            count++;
        };

        result += (count.toString() + str[i]);
    }

    return parseInt(result);
}

// console.log(lookAndSaySequence(8889022));
// console.log(lookAndSaySequence(5555555555));