'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('012/manasa_and_stones_test.txt','utf8',function(error,data){
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

// Complete the stones function below.
function stones(n, a, b) {
    let nCnt = n-1;

    if(a > b){
        let imsi = a;
        b = a;
        a = b;
    }

    let min = a*nCnt;
    let max = b*nCnt;

    let result = '';

    for(let stepNum = min; stepNum <=max; stepNum += (b-a)){
        result += stepNum+' ';
    }
    return result;
}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine(), 10);

        const a = parseInt(readLine(), 10);

        const b = parseInt(readLine(), 10);

        let result = stones(n, a, b);
        console.log(result.trim());

      //  ws.write(result.join(" ") + "\n");
    }

  //  ws.end();
}