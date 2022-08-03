const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: Jef");

    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 1000)

    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 2000)

    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 5000)

    // setTimeout(() => {
    //   conn.write("Move: right");;
    // }, 7000)

    // setTimeout(() => {
    //   conn.write("Move: right");;
    // }, 9000)





  
  });


  conn.setEncoding("utf8"); // interpret data as text
  // conn.on("data", (data) => {
  //console.log("Name: JJJ", data);

  conn.on("data", (key) => {
    conn.setEncoding("utf8");
    if (key === '\u0038') { //letter b
      //process.stdin.write('"Move: up"');   
      //console.log("Move: up", data)
      conn.write("Move: up")
    }

    if (key === '\u0040') { //letter b
      //process.stdout.write('"Move: down"');  
      //console.log("Move: down", data)
      conn.write("Move: down")
    }

    if (key === '\u0037') { //letter b
      //process.stdout.write('"Move: left"');  
      //console.log("Move: left", data) 
      conn.write("Move: left")
    }

    if (key === '\u0039') { //letter b
      //process.stdout.write('"Move: right"');  
      //console.log("Move: right", data)
      conn.write("Move: right")
    }

  });




  //client.write("Name:JJJ");










// interpret incoming data as text
//conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log(data.toString());
});


return conn;
};


module.exports = {
  connect,
}
