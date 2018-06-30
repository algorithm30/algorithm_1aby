'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('013/strong_password_test.txt','utf8',function(error,data){
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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let upperCaseChk = 0;
    let lowerCaseChk = 0;
    let specialChk = 0;
    let numChk = 0;
    let totalCnt = 0;

    for(let i=0; i<n; i++){
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            upperCaseChk++;
        }
        else if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
            lowerCaseChk++;
        }
        
        else if(password.charAt(i) == '!' || password.charAt(i) == "@" || password.charAt(i) == "#" ||
                password.charAt(i) == "$" || password.charAt(i) == "%" || password.charAt(i) == "^" ||
                password.charAt(i) == "*" || password.charAt(i) == "&" || password.charAt(i) == "(" ||
                password.charAt(i) == ")" || password.charAt(i) == "-" || password.charAt(i) == "+"){
                    specialChk++;
        }
        else if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            numChk++;
        }    
    }
   
    if(upperCaseChk == 0){
        totalCnt++;
    }
    if(lowerCaseChk == 0){
        totalCnt++;
    }
    if(specialChk == 0){
        totalCnt++;
    }
    if(numChk == 0){
        totalCnt++;
    }
    
    if(n+totalCnt < 6){
        return ((6-(n+totalCnt))+totalCnt);
    }
    else{
        return totalCnt;
    }
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    console.log(answer);

   // ws.write(answer + "\n");

   // ws.end();
}
