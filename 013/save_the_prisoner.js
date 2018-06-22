'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('013/save_the_prisoner_test.txt','utf8',function(error,data){
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

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {

    let result = (s+m-1)%n;
    if(result == 0){
        return n;
    }else{
        return result;
    }
 

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        console.log(result);
        //ws.write(result + "\n");
    }

    //ws.end();
}