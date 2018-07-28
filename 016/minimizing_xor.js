'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('016/minimizing_xor_test.txt','utf8',function(error,data){
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

// Complete the maximizingXor function below.
function maximizingXor(l, r) {

    let result = 0;

    for(let i=l; i<r+1; i++){
        for(let j=l; j<r+1; j++){
            let xorVal = i^j;
            result = Math.max(result,xorVal);
        }
    }
   
    return result;

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine(), 10);

    const r = parseInt(readLine(), 10);

    let result = maximizingXor(l, r);

    console.log(result);

  //  ws.write(result + "\n");

  //  ws.end();
}