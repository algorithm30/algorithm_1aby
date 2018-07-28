'use strict';

//const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

const fs = require('fs');
fs.readFile('014/fibonacci_modified_test.txt','utf8',function(error,data){
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

// Complete the fibonacciModified function below.

function main() {

    let t1T2n = readLine().split(' ');

    let t1 = new BigNum(t1T2n[0]);
    let t2 = new BigNum(t1T2n[1]);

    let n = parseInt(t1T2n[2], 10);

    if (n === 0) {
        console.log(t1.toString());
    } else if (n === 1) {
        console.log(t2.toString());
    }

    for (let i = 2; i < n; ++i) {
        let next = t2.multiplyBy(t2).add(t1);
        t1 = t2;
        t2 = next;
    }
    
    console.log(t2.toString());
}

let BigNum = function(num) {
    if (typeof num === 'string') {
        this.parts = [];
        while (num.length) {
            this.parts.push(parseInt(num.slice(-5),10));
            num = num.substring(0,num.length-5)
        }    
    } else {
        this.parts = num;
    }
    
}

BigNum.prototype.multiplyBy = function(bigNum) {
    let newParts = [];
    for (let i = 0, l1 = this.parts.length; i < l1; ++i) {
        for (let j = 0, l2 = bigNum.parts.length; j < l2; ++j) {
            let newPartIndex = i + j;
            newParts[newPartIndex] = this.parts[i] * bigNum.parts[j] + (newParts[newPartIndex] || 0);
        }
    }
    this._fixOverflows(newParts);
    return new BigNum(newParts);
};

BigNum.prototype.add = function(bigNum) {
    let newParts = [];
    let length = Math.max(this.parts.length, bigNum.parts.length);
    for (let i = 0; i < length; ++i) {
        newParts[i] = (this.parts[i] || 0) + (bigNum.parts[i] || 0);
    }
    this._fixOverflows(newParts);
    return new BigNum(newParts);
}

BigNum.prototype._fixOverflows = function(parts) {
    for (let k = 0; k < parts.length; ++k) {
        let currentPart = parts[k].toString();
        if (currentPart.length > 5) {
            let overflowLength = currentPart.length - 5;
            let overflow = parseInt(currentPart.substr(0, overflowLength), 10);
            parts[k] = parseInt(currentPart.substr(overflowLength), 10)
            parts[k + 1] = overflow + (parts[k + 1] || 0);
        }
    }
}

BigNum.prototype.toString = function() {
    let fullNumber = this.parts.map(function(num) {
        num = num.toString();
        let paddingAmount = 5 - num.length;
        for (let i = 0; i < paddingAmount; ++i) {
            num = '0' + num;
        }
        return num
    }).reverse().join('');
    while( fullNumber.charAt(0) === '0' && fullNumber.length !== 1) {
        fullNumber = fullNumber.substring(1);
    }
    return fullNumber;
};