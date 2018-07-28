'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('015/game_of_throne_1_test.txt','utf8',function(error,data){
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

// Complete the gameOfThrones function below.
function gameOfThrones(s){
    
    let alphaArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let oddCount = 0;
    for(let i=0; i<alphaArr.length; i++){
        let chkRegExp = new RegExp(alphaArr[i],"ig");
        let results = s.match(chkRegExp); 
        if(results != null) {
            if(results.length%2 != 0){
                oddCount++;
            }
        }
    }
    
    if(oddCount > 1){
        return "NO";
    }else{
        return "YES";
    }

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    console.log(result);
    //ws.write(result + "\n");

    //ws.end();
}
