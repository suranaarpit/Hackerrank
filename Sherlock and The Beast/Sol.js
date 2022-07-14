Ques: "https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem?h_r=profile"
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {
    // Write your code here
let y = n;
    let z = y;
    while (z%3!==0) {
        z-=5; 
    }
    if (z < 0) {
        console.log('-1');
    }
    else {
        console.log(new Array(z).fill('').map(a => '5').concat(new Array(y-z).fill('').map(a => '3')).join(''))
    }
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        decentNumber(n);
    }
}
