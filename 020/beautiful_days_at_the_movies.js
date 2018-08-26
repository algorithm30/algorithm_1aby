process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('020/beautiful_days_at_the_movies_test.txt','utf8',function(error,data){
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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
   
    let rangeArr = new Array();
    let reverseArr = new Array();
    let resultCnt = 0;

    for(let li=i; li<j+1; li++){
        rangeArr.push(li);
      
        let input = li.toString();
        let reverseVal = input.split('');
        let reverseRev = reverseVal.reverse();
        let reverseJoin = reverseRev.join("");
       
        reverseArr.push(reverseJoin);
    }
    
    for(let lj=0; lj<rangeArr.length; lj++){
        if(Number.isInteger((rangeArr[lj] - reverseArr[lj])/k) == true){
            resultCnt++;
        }
    }
    return resultCnt;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    console.log(result);

    //ws.write(result + "\n");

   // ws.end();
}
