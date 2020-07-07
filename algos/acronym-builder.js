// Write code to create a function that takes a string and returns the acronym for the given string.
function acronymBuilder(str) {
    const words = str.split(' ');
    let acronym = '';

    for (word of words) {
        acronym += word[0].toUpperCase();
    }

    return acronym;
}

// console.log(acronymBuilder('For your information...'));
// console.log(acronymBuilder(`I'll let you know, I'm a very prominent person`));
