'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('002/mini_max_sum_test.txt','utf8',function(error,data){
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    let sumVal = 0;
    let maxVal = 0;
    let minVal = arr.reduce( function (previous, current) { 
        return previous > current ? current:previous;
    });

    for(let i=0; i<arr.length; i++){
        if(minVal > arr[i]){
            minVal = arr[i];
        }

        if(maxVal < arr[i]){
            maxVal = arr[i];
        }

        sumVal = sumVal + arr[i];
    }

    console.log((sumVal - maxVal)+" "+(sumVal - minVal));
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}