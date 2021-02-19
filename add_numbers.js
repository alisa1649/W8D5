
const readline = require('readline');
const reader = readline.createInterface( {input: process.stdin, output: process.stdout});

function addNumbers(sum, numsLeft,completionCallback ){
    if (numsLeft >0){
        reader.question("Enter a number:", function(userInput){
            const usersNumber = parseInt(userInput);
            sum+= usersNumber ;
            console.log(`${sum}`);
            addNumbers(sum, numsLeft-1,completionCallback);
        });
    }else{
        completionCallback(sum);
    }
}


addNumbers(2, 5, function(sum){
    console.log(`${sum}`);
    reader.close();
});
