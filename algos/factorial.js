function factorial(num) {
    
    let fact = 1;
    for (var i = num; i > 1; i--) {
        fact *= i;
    }
    
    console.log(fact);
}

// factorial(0);
// factorial(3);
// factorial(15);