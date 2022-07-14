Ques: "https://www.hackerrank.com/challenges/missing-numbers/problem?h_r=profile"
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
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
let empObj={}
    let empObj2={}
    
    let aL = arr.length
    let bL = brr.length
    
    for(let i=0; i<aL; i++){
    let first = arr[i]
        if(empObj[first] === undefined){
            empObj[first] = 1
        }
        else{
            empObj[first] += 1
        }
    }
    for(let j=0;j<bL;j++){
        
    let second = brr[j]
        if(empObj2[second] === undefined){
            empObj2[second]=1
        }else{
            empObj2[second] += 1
        }
    }
    let res = [];
    for(let keys in empObj2){
        if(empObj[keys] === undefined){
           res.push(keys); 
        }
      if(empObj[keys] < empObj2[keys]){
        res.push(keys);
      }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine().trim(), 10);

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
