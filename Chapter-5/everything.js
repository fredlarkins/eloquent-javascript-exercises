/* Write two functions that work like the every function. One using a loop and another using some. */

function everyUsingLoop(array, predicate) {
    for (let item of array) {
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}

let l = [1, 2, 9];

function everyUsingSome(array, predicate) {
    return !array.some(element => !predicate(element));
}

// some is like ||
l.some()
console.log('Result of everyUsingLoop:');
console.log(everyUsingLoop(l, n => n < 10));

console.log('Result of everyUsingSome:');
console.log(everyUsingSome(l, n => n < 10));