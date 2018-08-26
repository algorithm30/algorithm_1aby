process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('022/viral_advertising_test.txt','utf8',function(error,data){
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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let shared = 5;
    let cumulative = 0;

    for(let i=1; i<=n; i++){
        let liked = Math.floor(shared/2);
        shared = liked *3;
        cumulative = cumulative + liked;
    }
    return cumulative;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = viralAdvertising(n);

    console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}