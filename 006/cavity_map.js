'use strict';



process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('006/cavity_map_test.txt','utf8',function(error,data){
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

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

// Complete the cavityMap function below.
function cavityMap(n,grid) {
    if(n == 1){
        return grid;
    }else{
        for(let i=1; i<n-1; i++){
            for(let j=1; j<grid[i].length-1; j++){
                let xData = grid[i].substr(j,1);          
                if(xData > grid[i-1].substr(j,1) && xData > grid[i].substr(j-1,1) 
                && xData > grid[i+1].substr(j,1) && xData > grid[i].substr(j+1,1))
                {
                    grid[i] = grid[i].replaceAt(j, "X");
                }
            }
        }
        return grid;
    }
}

function main() {

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(n,grid);

    console.log(result.join("\n"));
}