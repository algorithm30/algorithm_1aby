process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('021/jumping_on_the_clouds_test.txt','utf8',function(error,data){
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
function jumpingOnClouds(c) {
    let cloudCnt = 0;
    let cloudLen = 0;
    let cloudPosition = 0;

    while(cloudPosition < c.length-1){
        if(c[cloudPosition +2] == 1){
            cloudPosition = cloudPosition+1;
        }else{
            cloudPosition = cloudPosition+2;
        }
        cloudCnt++;
    }
    return cloudCnt;

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    console.log(result);

    //ws.write(result + "\n");

    //ws.end();
}