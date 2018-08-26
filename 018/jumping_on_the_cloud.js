process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('018/jumping_on_the_cloud_test.txt','utf8',function(error,data){
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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {

    let energy = 100;
    let startCnt = 1;
    let endCnt = c.length / k;
    let i = 0;
    while(startCnt <= endCnt){
        if(c[i] == 0){
            energy = energy-1;
        }else{
            energy = energy-3;
        }
        i = i+k;
        startCnt++;
    }
    return energy;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    console.log(result);
    //ws.write(result + "\n");

    //ws.end();
}