'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('008/picking_numbers_test.txt','utf8',function(error,data){
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

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    let result = 0; // 결과값
    
    for(let i=0; i<a.length; i++){ //기준 숫자
        let currentCnt = 0; //기준 숫자별 카운트용
        for(let j=0; j<a.length; j++){ // 같은 배열 하나씩 비교
            if(a[i] == a[j] || a[i] +1 == a[j]){ // 자기랑 똑같거나 차이가 +1인것은 카운트 
                currentCnt = currentCnt +1;
            }
        }
        if(result < currentCnt){ // 가장 수가 높은게 결과로 나와야함
            result = currentCnt;
        }
    }
    return result;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a); // 비교할 배열 전달

    console.log(result);

  //  ws.write(result + "\n");

    //ws.end();
}