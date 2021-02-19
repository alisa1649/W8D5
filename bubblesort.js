const readline = require('readline');
const reader = readline.createInterface({ input: process.stdin, output: process.stdout });

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > ${el2}?`, function (ans) {
        if (ans === "yes") {
            callback(true);
        }
        else {
            callback(false);
        }
    });
}



function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
            if (isGreaterThan){
                let larger = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = larger;
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
    else {
        outerBubbleSortLoop(true);
    }
}



// askIfGreaterThan(1, 17, function (a) { console.log(a); });
let a = [2, 4, 5, 6, 90, 4, 2, 1];
innerBubbleSortLoop(a, 0, false, function () { 
    console.log("Outer"); 
    reader.close(); 
    console.log(a);
});

