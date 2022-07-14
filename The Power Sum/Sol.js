Q: "https://www.hackerrank.com/challenges/the-power-sum/problem?h_r=profile"
'use strict';

const fs = require('fs');

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
 * Complete the 'powerSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER N
 */
let result = 0
function checkRecursive(num, X, k, N)
    {
        if (X == 0)
            result++;
          
        let r = Math.floor(Math.pow(num, 1.0 / N));
  
        for (let i = k + 1; i <= r; i++) {
            let a = X - Math.pow(i, N);
          if (a >= 0)
            checkRecursive(num,
                   X - Math.pow(i, N), i, N);
        }
        return result;
    }
// ******************* OPEN Wrapper over checkRecursive() ******************
function powerSum(X, N) {
    // Write your code here
     return checkRecursive(X, X, 0, N);
}
// ******************* Wrapper CLOSE ******************

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const X = parseInt(readLine().trim(), 10);

    const N = parseInt(readLine().trim(), 10);

    const result = powerSum(X, N);

    ws.write(result + '\n');

    ws.end();
}
