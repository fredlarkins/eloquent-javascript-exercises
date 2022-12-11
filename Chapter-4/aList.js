/*
Write a function arrayToList that takes an array and converts it to a list structure.
*/

function arrayToList(inputArray) {
    let x = {
        value : inputArray.pop(),
        rest : null
    };
    for (let item of inputArray.reverse()) {
        let temp = {
            value : item,
            rest : x
        };
        x = temp;
    }
    return x;
} 

let list = arrayToList(['Hey', 'there', 'stranger']);

console.log(list);
// -> {value: 'Hey', rest: {value: 'there', rest: {value: 'stranger', rest: null}}}

/*
Also write a function that takes a list and flattens it into an array.
*/

function listToArray(list) {
    let a = [list['value']];
    let rest = list['rest'];
    while (rest) {
        a.push(rest['value']);
        rest = rest['rest'];
    }
    return a;
}

// Refactoring with help from hints
function listToArrayV2(list) {
    let a = [];
    for (let node = list; node; node = node.rest) {
        a.push(node.value);
    }
    return a;
}

console.log(listToArray(list));
console.log(listToArrayV2(list));
// --> [ 'Hey', 'there', 'stranger' ]


/*
Write a function called prepend which takes an element and a list, creating a new list with the element at the beginning.
*/

function prepend(elem, list) {
    return {
        value: elem,
        rest: list
    };
}


/*
Write a function nth that returns the nth element in a list, returning undefined if no such element exists.
*/

function nth(list, n) {
    let value;
    for (let node = list, counter = 0; node; node = node.rest, counter++) {
        if (counter == n) {
            value = node.value;
        }
    }
    return value;
}

console.log(nth(list, 2));
// --> stranger


// Recursive version (w/ help from hints)
function nthRecursive(list, n) {
    if (n === 0) {
        return list.value;
    } else if (!list.rest) {
        return;
    }
    else {
        return nthRecursive(list.rest, n - 1);
    }
}

console.log(nthRecursive(list, 0));
// --> Hey

console.log(nthRecursive(list, 1));
// --> There

console.log(nthRecursive(list, 50));
// --> undefined