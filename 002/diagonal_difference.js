'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('002/diagonal_difference_test.txt','utf8',function(error,data){
    input_stdin += data;
    input_stdin_array = input_stdin.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));
    main();
});

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(a) {
    let lrVal = 0;
    let rlVal = 0;

    for(let i=0; i<a.length; i++){
        lrVal = lrVal + a[i][i];
        rlVal = rlVal + a[i][a.length-i-1];
    }

    return Math.abs(lrVal - rlVal); 

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let i = 0; i < n; i++) {
        a[i] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    console.log(result);

    //ws.write(result + "\n");

   // ws.end();
}