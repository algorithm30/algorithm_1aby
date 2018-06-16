'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('012/extra_long_factorials_test.txt','utf8',function(error,data){
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

// Complete the extraLongFactorials function below.
function extraLongFactorials(numberArray, times) {
    var result = [];
    var rest = 0;
    for (var i = 0; i < numberArray.length; i++) {
        result.push(((numberArray[i] * times) + rest) % 10);
        rest = Math.floor(((numberArray[i] * times) + rest) / 10);
    }
    if (rest !== 0) {
        var length = rest.toString().length;
        for (var i = 0; i < length; i++) {
            result.push(Math.floor(rest%(Math.pow(10, i + 1))/(Math.pow(10, i))));
        }
    }
    return result;

}

function main() {
    const n = parseInt(readLine(), 10);

    var result = [1];
    for (var i = parseInt(n); i > 0; i--) {
        result = extraLongFactorials(result, i);
    }
    var output = '';
    for (var j = result.length - 1; j >= 0; j--) {
        output += result[j].toString();
    }
    console.log(output);

}