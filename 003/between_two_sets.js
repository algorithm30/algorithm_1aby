'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('003/between_two_sets_test.txt','utf8',function(error,data){
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
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    /* 문제 자체가 a배열의 최대값과 b배열의 최소값 사이의 숫자 중
     * a,b 배열에 있는 모든 수와 나누었을때 나머지가 0이되는 숫자를 구하면 된다.
     */
    let minVal = Math.max.apply(null,a);
    let maxVal = Math.min.apply(null,b);
    let count = 0;

    for(let i = minVal; i<= maxVal; i++){
        let result = true;
        for(let j=0; j<a.length; j++){
            if(i%a[j] != 0){
                result = false;
                break;
            }
        }

        if(result){
            for(let k=0; k<b.length; k++){
                if(b[k]%i != 0){
                    result = false;
                    break;
                }
            }
        }

        if(result){
            console.log("value = "+i);
            count++;
        }
    }
    return count;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    console.log(total);
    //ws.write(total + "\n");

    //ws.end();
}