process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('018/hackerrank_in_a_string_test.txt','utf8',function(error,data){
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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {

    let result = "";
    let hackerrankArr = ["h","a","c","k","e","r","r","a","n","k"];
    let hackerrankCnt = 0;
    for(let i=0; i<s.length; i++){
        if(s.substr(i,1) == hackerrankArr[hackerrankCnt]){
            result = result + s.substr(i,1);
            hackerrankCnt++;
        }
    }

    if(result == "hackerrank"){
        return "YES";
    }else{
        return "NO";
    }
    
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        console.log(result);

       // ws.write(result + "\n");
    }

    //ws.end();
}