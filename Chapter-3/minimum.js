// Define a function that return the minimum of two values

const min = function(a, b) {
    if (a === b) {
        console.log('Numbers are the same!');
    } else if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(1, -2));