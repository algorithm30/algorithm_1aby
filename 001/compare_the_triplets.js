'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('001/compare_the_triplets_test.txt','utf8',function(error,data){
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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/*
 * Complete the solve function below.
 */
function solve(aData,bData) {
    /*
     * Write your code here.
     */
    let aCnt = 0;
    let bCnt = 0;

    for(let i=0; i<3; i++){
        if(parseInt(aData[i], 10) > parseInt(bData[i], 10)){
            aCnt++;
        }else if(parseInt(aData[i], 10) < parseInt(bData[i], 10)){
            bCnt++;
        }
    }

    return aCnt+" "+bCnt;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a0A1A2 = readLine().split(' ');

    const b0B1B2 = readLine().split(' ');

    let result = solve(a0A1A2,b0B1B2);

    console.log(result);
}
