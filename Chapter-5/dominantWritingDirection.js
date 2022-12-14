/* Write script that computes dominant writing direction in a string.*/

const SCRIPTS = require('./scripts.js');

function dominantWritingDirection(text) {
    let counts = [];
    for (let char of text) {
        // Identify script
        let script = characterScript(char);
        if (script) {
            // Record the direction
            let direction = script.direction;
            let index = counts.findIndex(n => n.direction == direction);
            if (index == -1) {
                counts.push({direction:direction, count: 1});
            } else {
                counts[index].count++;
            }
        }
    }
    let largest = 0;
    let winner;
    for (let item of counts) {
        if (item.count > largest) winner = item.direction
    }
    return `Winner: ${winner}`;
}

function characterScript(char) {
    let codePoint = char.codePointAt(0) // Unicode number for string
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return codePoint >= from && codePoint <= to
        })) {
            return script;
        }
    }
    return null;
}

let str = 'ئـ ـئـ ـئ aaaᠤᠯᠤᠰ ᠢ'

console.log(dominantWritingDirection(str));