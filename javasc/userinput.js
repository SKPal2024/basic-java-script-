console.log("Please enter some input:");

process.stdin.on('data', function(data) {
    console.log(`You entered: ${data.toString().trim()}`);
    process.exit();  // Ends the process after receiving input
});
// var userInput = prompt("Please enter your name:");
// alert("Hello, " + userInput + "!");
