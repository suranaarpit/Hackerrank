Ques: "https://www.hackerrank.com/challenges/jim-and-the-orders/problem?h_r=profile"
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
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

function jimOrders(orders) {
    // Write your code here
return orders.map((order, index) => {
            let sum = order.reduce((a, b) => a + b);

            return [index + 1, sum];
        }).sort((a, b) => a[1] - b[1]).map((order) => order[0]);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let orders = Array(n);

    for (let i = 0; i < n; i++) {
        orders[i] = readLine().replace(/\s+$/g, '').split(' ').map(ordersTemp => parseInt(ordersTemp, 10));
    }

    const result = jimOrders(orders);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
