let connection;
let currentIntervalID;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.stdout.write("You have quit the game ! \n");
    process.exit();
  }

  if (data === 'b') {
    connection.write("Say: Please Work!!!");
    
  }


 

  if (data === 'w') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: up");
    }, 75);

  } else if (data === 'a') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: left");
    }, 75);

  } else if (data === 's') {

    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: down");
    }, 75);

  } else if (data === 'd') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      connection.write("Move: right");
    }, 75);
  }




};



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;

};


module.exports = {
  setupInput,
  //handleUserInput,

};