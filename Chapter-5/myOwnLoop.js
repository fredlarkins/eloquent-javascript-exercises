/* Write a higher-order function called loop that acts like a for loop.
I.e. it takes a value, a test function, an update function and a body function. The loop stops when the test function equals false. */

// function that counts down from value, printing the result

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(10, n => n > 0, n => n - 1, console.log);