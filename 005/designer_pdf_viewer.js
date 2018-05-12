'use strict';



process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('005/designer_pdf_viewer_test.txt','utf8',function(error,data){
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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    let wordLen = word.length;
    let higherWord = 0;

    for(let i=0; i<wordLen; i++){
        let wdVal = h[word.substr(i, 1).charCodeAt(0) - 97];
        if(wdVal > higherWord){
            higherWord = wdVal;
        }
    }

    let resultWidth = wordLen * 1 * higherWord;

    return resultWidth;
}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    console.log(result);
}