process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs = require('fs');
fs.readFile('abc.txt','utf8',function(error,data){
    input_stdin += data;
    input_stdin_array = input_stdin.split("\n");
    main();
});

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function solveMeFirst(a, b) {
  // Hint: Type return a+b below   
  
    return a+b;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var res = solveMeFirst(a, b);
    console.log(res);
}
