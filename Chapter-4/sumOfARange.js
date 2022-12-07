/*
Write a function that takes two arguments: a start value and a stop value, returning an array containing all numbers up to and including the end value.

Write a second function that takes an array of numbers and sums them together.

Re-write the first function to take a 'step' value, i.e. the increment with which it counts up.
*/

function range(start, end) {
    let rangeOfNumbers = [];
    for (let n=start; n <= end; n++) {
        rangeOfNumbers.push(n);
    }
    return rangeOfNumbers
}

function sum(listOfNumbers) {
    let total = 0;
    for (let number of listOfNumbers) {
        total += number;
    }
    return total;
}

let myRange = range(1, 10)
console.log(myRange)

console.log(sum(myRange));


// Bonus assignment - step values and handling negative steps
function rangeWithStep(start, end, step=1) {
    let rangeOfNumbers = [];
    if (step > 0) {
        for (let n = start; n <= end; n += step) {
            rangeOfNumbers.push(n);
        }
    } else {
        for (let n = end; n <= start; n += Math.abs(step)) {
            rangeOfNumbers.unshift(n);
        }
    }
    return rangeOfNumbers;
}

console.log(rangeWithStep(5, 2, -1));