require('./05_higher_order/code/scripts.js');

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + (b + a/b), 0));


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}


console.log(SCRIPTS.reduce((a, b) => {
    // The 'current' value a becomes the script with the highest character count for each iteration
    return characterCount(a) < characterCount(b) ? b : a;
}));


function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log('Average start date of alive languages: ' + Math.round(average(
    SCRIPTS.filter(a => a.living).map(a => a.year)
)));

console.log('Average start date of dead languages: ' + Math.round(average(
    SCRIPTS.filter(a => !a.living).map(a => a.year)
)));


function countBy(items, groupNameGenerator) {
    let counts = [];
    for (let item of items) {
        let name = groupNameGenerator(item);
        let known = counts.findIndex(n => n.name == name);
        if (known == -1) { // i.e. the item with property 'name' == name NOT present
            counts.push({name, count: 1}); // add the group name to the counts array and set count to 1
        } else { // group name exists and we've got another instance to add to the count
            counts[known].count++ // go to index known and add 1 to count property
        }
    }
    return counts;
}

let sentence = ['Grizzly', 'Adams', 'did', 'have', 'a', 'beard'];

console.log(countBy(sentence, a => a.length +  'letters'));