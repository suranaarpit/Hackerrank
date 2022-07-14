Q: "https://www.hackerrank.com/challenges/2d-array/problem?h_r=profile"
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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    
    let maxValue = -Infinity;
    for (let grandFather = 0; grandFather < 4; grandFather++) {
        for (let father = 0; father < 4; father++) {
            let sum = arr[grandFather + 1][father + 1];
            for (let son = 0; son < 3; son++) {
                sum += arr[grandFather][father + son];
                sum += arr[grandFather + 2][father + son]
            }
            if(sum>maxValue){
                maxValue = sum
            }
        }
    }

    return maxValue;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
