process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs = require('fs');
fs.readFile('004/service_lane_test.txt','utf8',function(error,data){
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

function serviceLane(n, cases, width) {
    // Complete this function
    var result = new Array(cases.length);
    for(var i=0; i<cases.length; i++){
        var minWidthArray = new Array();
        for(var j=cases[i][0]; j<=cases[i][1]; j++){
            minWidthArray.push(width[j]);
        }
        result[i] = Math.min.apply(null, minWidthArray);
    }
    
    return result;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    var cases = [];
    for(cases_i = 0; cases_i < t; cases_i++){
       cases[cases_i] = readLine().split(' ');
       cases[cases_i] = cases[cases_i].map(Number);
    }
    var result = serviceLane(n, cases, width);
    console.log(result.join("\n"));



}