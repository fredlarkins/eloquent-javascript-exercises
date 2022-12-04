/*
    Print numbers from 1 - 100
    If number is divisible by 3, print 'Fizz'
    If num is divisible by 5, print 'Buzz'
    If num is divisible by 3 AND 5, print 'FizzBuzz'
*/

for (let num = 1; num < 101; num += 1) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Fizz')
        }
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}