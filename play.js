const { connect } = require("./client");
// const net = require("./client");


console.log("Connecting ...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;

};

const handleUserInput = function (data) {
  
  if ( data === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();

  }

}


setupInput()
