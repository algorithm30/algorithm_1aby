process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('017/utopian_tree_test.txt','utf8',function(error,data){
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

// Complete the utopianTree function below.
function utopianTree(n) {

    let treeHeight = 1;
    if(n == 0){
        return 1;
    }
    for(let i=1; i<=n; i++){
        if(i%2 == 0){
            treeHeight = treeHeight + 1;
        }else{
            treeHeight = treeHeight * 2;
        }
    }

    return treeHeight;

}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        //ws.write(result + "\n");
        console.log(result);
    }

   // ws.end();
}