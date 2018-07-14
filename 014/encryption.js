'use strict';

//onst fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('014/encryption_test.txt','utf8',function(error,data){
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

// Complete the encryption function below.
function encryption(s) {

    let result = "";
    let startLen = Math.floor(Math.sqrt(s.length));
    let endLen = Math.ceil(Math.sqrt(s.length));
    
    while ((startLen * endLen) < s.length){
        startLen += 1;
    }

    for(let i=0; i<endLen; i++){
        for(let j=0; j<startLen; j++){
            result = result + s.charAt(i+(j*endLen));
        }
        if(i != endLen -1){
            result = result + " "; 
        }
    }

    return result;

}

function main() {
   //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    console.log(result);
    //ws.write(result + "\n");

    //ws.end();
}