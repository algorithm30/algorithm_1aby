'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('005/counting_valleys_test.txt','utf8',function(error,data){
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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let upCount = 0;
    let currentPos = 0;

    for(let i=0; i<n; i++){    
        if(s.substr(i,1) == "U"){
            if(currentPos == -1){
                upCount++;
            }
            currentPos++;
        }else{
            currentPos--;
        }
    }

    return upCount;
}

function main() {

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    console.log(result);
}