process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs = require('fs');
fs.readFile('004/bon_appetit_test.txt','utf8',function(error,data){
    input_stdin += data;
    input_stdin_array = input_stdin.split("\n");
    main();
});

process.stdin.on("data", function (data) {
    input_stdin += data;
});

process.stdin.on("end", function () {
    // now we can read/parse input
    input_stdin_array = input_stdin.split("\n");
    main(); 
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function bonAppetit(n, k, ar, b) {
    // Complete this function
    var result = "";
    ar.splice(k, 1);

    var ab = ar.reduce(function(i, j) {
      return i + j;
    });
    ab = ab/2;
    
    if((b-ab) > 0){
        result = b - ab;
    }else{
        result = "Bon Appetit";
    }
    
    return result;
}

function main() {
    var n_temp = [];
    n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);

    var ar = [];
    ar = readLine().split(' ');
    ar = ar.map(Number);
    
    var b = parseInt(readLine());
    var result = bonAppetit(n, k, ar, b);
    console.log(result);
    //process.stdout.write("" + result + "\n");

}