/*
Create one function called reverseArray that takes an array as an argument and returns a new one with the elements reversed.

Create a second function called reverseArrayInPlace that modifies the array passed as an argument, reversing it.
*/

let sentence = ['Grizzly', 'Adams', 'did', 'have', 'a', 'beard'];

console.log(sentence);
// -> [ 'Grizzly', 'Adams', 'did', 'have', 'a', 'beard' ]

function reverseArray(arrayToReverse) {
    let newArray = [];
    for (let item of arrayToReverse) {
        newArray.unshift(item);
    }
    return newArray;
}

console.log(reverseArray(sentence));
// -> [ 'beard', 'a', 'have', 'did', 'Adams', 'Grizzly' ]



function reverseArrayInPlace(arrayToReverse) {          // Confession: I had to look at the hints on page 409.
    let i = 0;
    let numItems = arrayToReverse.length;
    for (let item of arrayToReverse.slice(0, Math.floor(numItems / 2))) {
        let mirrorIndex = numItems - 1 - i;
        let x = arrayToReverse[mirrorIndex];
        arrayToReverse[i] = x;
        arrayToReverse[mirrorIndex] = item;             // We've swapped the 'mirror' items, i.e. first and last, second and second last, etc.
        i += 1;
    }
}

reverseArrayInPlace(sentence);
// -> undefined

console.log(sentence);
// -> [ 'beard', 'a', 'have', 'did', 'Adams', 'Grizzly' ]