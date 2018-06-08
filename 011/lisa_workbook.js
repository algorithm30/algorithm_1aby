'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('011/lisa_workbook_test.txt','utf8',function(error,data){
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

// Complete the workbook function below.
function workbook(n, k, arr) {

    let specialCnt = 0;
    let totalWb = new Array();

    for(let i=0; i<n; i++){
        let wbPb = 1;
        let cpCnt = Math.ceil(arr[i]/k);
        let cpCurrent = 1;
        for(let j=0; j<cpCnt; j++){
            let pushArray = new Array();
            for(let l=0; l<k; l++){
                pushArray.push(wbPb);
                if(wbPb == arr[i]){
                    break;
                }
                wbPb = wbPb +1;
            }
            totalWb.push(pushArray);
        }
    }

    for(let m=0; m<totalWb.length; m++){
        for(let n=0; n<totalWb[m].length; n++){
            if(m+1 == totalWb[m][n]){
                specialCnt = specialCnt + 1;
            }
        }
    }

    return specialCnt;

}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = workbook(n, k, arr);
    
    console.log(result);

   // ws.write(result + "\n");

   // ws.end();
}