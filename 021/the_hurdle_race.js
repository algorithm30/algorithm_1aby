process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('021/the_hurdle_race_test.txt','utf8',function(error,data){
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

// Complete the hurdleRace function below.
function hurdleRace(k, height) {
   let maxVal = height.reduce(function(a,b){
       return Math.max(a,b);
   });

   if(maxVal < k){
       return 0;
   }else{
       return maxVal - k;
   }


}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

    let result = hurdleRace(k, height);

    console.log(result);

    //ws.write(result + "\n");

   // ws.end();
}