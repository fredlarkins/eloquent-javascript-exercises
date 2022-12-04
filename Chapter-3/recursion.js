/*
Write a function that tests whether a number is even. 
The function should subtract 2 from the number until it reaches 0 (even) or 1 (odd).
Return a bool true or false depending on whether it is even or not.
*/


// First attempt
const isEven = function(num) {
    if (num === 1) {
        return false;
    }
    if (num < 0) {
        num *= -1;
    }
    num -= 2;
    return num === 0 || isEven(num);
}

console.log(isEven(-50));


// Second attempt (refactoring) after reading hints
const isEvenV2 = function(num) {
    if (num === 1) {
        return false;
    } else if (num === 0) {
        return true;
    } else if (num < 0) {
        return isEvenV2(num + 2);
    } else {
        return isEvenV2(num - 2);
    }
}

console.log(isEvenV2(-62));