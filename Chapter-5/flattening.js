/* Flatten an array of arrays into a single array using reduce and concat. */

function flatten(arrays) {
    let flattened = arrays.reduce((a, b) => a.concat(b));
    return flattened;
}

let array1 = [1, 2, 3, 4];
let array2 = ['Hello', 'there'];

console.log(flatten([array1, array2]));
