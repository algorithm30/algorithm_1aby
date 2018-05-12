process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var fs = require('fs');
fs.readFile('004/divisible_sum_pairs_test.txt','utf8',function(error,data){
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

function divisibleSumPairs(n, k, ar) {
    // Complete this function
    var countDiv = 0; // 리턴할 합계
    
    for(var i=0; i<ar.length; i++){ //i순서 루프
        for(var j=i+1; j<ar.length; j++){  //j순서 루프 (i+1)   
            if((ar[i]+ar[j])%k == 0){ //배열의 중복되지 않은 순서끼리 더하여 k와 나눌시 나머지가 0일경우 카운트
                countDiv += 1;
            }
        }   
    }
    return countDiv;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = divisibleSumPairs(n, k, ar);
    console.log(result);

}
