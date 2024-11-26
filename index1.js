module.exports = { printPrimes, generateRandomNumber }

function printPrimes(num1, num2) {
    var a=num1, b=num2, arr=[];
    for (let i = a; i <= b; i++) {
        if (i == 1 || i == 0)
            continue;
        var flag = 1;
        for (let j = 2; j <= i / 2; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1)
            arr.push(i);
    }
    return arr;
}

function generateRandomNumber() {    
    return parseInt(Math.random(0,1) * 100);
}

//  for some reasons... we will not publish this in git... keep this repo like this only...
    // I dont know what those reasons are... I forgot now... anyway, we are publishing this in git


// testing-library ================> written in typescript.... transpiled into js libraries...
// gopal612-js-lib ================> pure vanilla javascript