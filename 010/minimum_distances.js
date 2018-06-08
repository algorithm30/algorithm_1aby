'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('010/minimum_distances_test.txt','utf8',function(error,data){
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

// Complete the minimumDistances function below.
function minimumDistances(a) {
    let firstVal = [];
    let duplicates = a.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
      }, []);
      
      if(duplicates.length == 0){
          return -1;
      }else{
        for(let i=0; i<duplicates.length; i++){
            let startVal = a.indexOf(duplicates[i]);
            let endVal = a.lastIndexOf(duplicates[i]);
            firstVal.push(Math.abs(startVal - endVal));
        }
        return Math.min(firstVal[0],firstVal[1]);
      }

}

function main() {
 //  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    console.log(result);
}