function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lowerString = string.toLowerCase();
    let count = 0;

    for (char of lowerString) {
        if (vowels.includes(char)) {
            count ++;
        }
    }

    console.log(count);
}

// countVowels('HeY THEre.  I am happy for YOU!');