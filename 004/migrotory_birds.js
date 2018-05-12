process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs = require('fs');
fs.readFile('004/migrotory_birds_test.txt','utf8',function(error,data){
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

/////////////// ignore above this line ////////////////////

function migratoryBirds(n, ar) {
// Complete this function
var birdsCounts = new Array(0,0,0,0,0,0);

for(var i = 0; i < ar.length; i++) {
    birdsCounts[ar[i]] += 1;
}

var resultBird = 0;
var standardBird = 0;
for(var j = 1; j < 6; j++) {  
    if(birdsCounts[j] > standardBird) {
        standardBird = birdsCounts[j];
        resultBird = j;
    }
}

return resultBird;
}

function main() {
var n = parseInt(readLine());
ar = readLine().split(' ');
ar = ar.map(Number);
var result = migratoryBirds(n, ar);
console.log(result);

}