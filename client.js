const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
  });


  conn.setEncoding("utf8"); // interpret data as text
  conn.on("data", (data) => {
  console.log("Name: JJJ", data);
  //client.write("Name:JJJ");
});
    
  



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
