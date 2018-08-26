process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('022/camelcase_test.txt','utf8',function(error,data){
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

// Complete the camelcase function below.
function camelcase(s) {
    let startWord = 1;
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<s.length; i++){
       if(upperCase.indexOf(s.charAt(i)) != -1){
            startWord++;
       }
    }
    return startWord;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = camelcase(s);

    console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}