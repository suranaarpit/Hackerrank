Q: "https://www.hackerrank.com/challenges/plus-minus/problem?h_r=profile"

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
function plusMinus(arr) {
    let x = 0, y = 0 , defaultValue = 0 , n = arr.length
    arr.map( n => {
        if( n > 0 )
            x++
        else if( n < 0 )
            y++
        else
            defaultValue++
    } )
    console.log( (x / n).toFixed(6) )
    console.log( (y / n).toFixed(6) )
    console.log( (defaultValue / n).toFixed(6) )
}
