'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('014/weighted_uniform_strings_test.txt','utf8',function(error,data){
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

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {

    let ltn = new Array(s.length);   

    for(let i=0; i<s.length; i++){
        ltn[i]= s.charAt(i).charCodeAt(0) - 96;
        if(i >0){
            if(s.charAt(i) == s.charAt(i-1)){
               ltn[i] = ltn[i-1] + (s.charAt(i).charCodeAt(0) - 96);
            }
        }
    } 

    for(let j=0; j<queries.length; j++){
        if(ltn.includes(queries[j])){
            queries[j] = "Yes";
        }else{
            queries[j] = "No";
        }
    }

    return queries;
}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    console.log(result.join("\n") + "\n");

    //ws.write(result.join("\n") + "\n");

    //ws.end();
}