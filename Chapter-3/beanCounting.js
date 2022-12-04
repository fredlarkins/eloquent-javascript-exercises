/*
Write a function that counts the number of uppercase "B"s in a string.
*/


// First function
function countBs(word) {
    function checkLetter(count, position) {
        if (position === word.length) {
            return count;
        } else {
            if (word[position] === "B") {
                count += 1;
            }
            return checkLetter(count, position+=1);
        }
    }
    return checkLetter(0, 0);
}

console.log(countBs("Brian Badonde"));