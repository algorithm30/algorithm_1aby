'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('001/time_conversion_test.txt','utf8',function(error,data){
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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    if(s.substr(s.length-2,2) == "PM"){
        s = s.replace("PM","");
        if(s.substr(0,2) != "12"){
            s = s.replace(s.substr(0,2),12+parseInt(s.substr(0,2), 10));
        }
    }else{
        s = s.replace("AM","");
        if(s.substr(0,2) == "12"){
            s = s.replace(s.substr(0,2),"00"); 
        }
    }

    return s;
}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    console.log(result);
}