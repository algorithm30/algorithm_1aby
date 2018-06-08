'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('011/beautiful_triplets_test.txt','utf8',function(error,data){
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

// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let result = 0;

    for(let i=0; i<arr.length; i++){
        let nextVal = arr[i];
        let arrayCnt = 0;
        for(let j=0; j<arr.length; j++){
            if(nextVal + d == arr[j]){
                nextVal = arr[j];
                arrayCnt = arrayCnt + 1;
            }

            if(arrayCnt == 2){
                result = result + 1;
                break;
            }
        }
    }
    return result;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = beautifulTriplets(d, arr);

    console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}