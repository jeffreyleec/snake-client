const net = require("net");
const {  IP,  PORT,} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: Jef");

     });

  

conn.on("data", (data) => {
  console.log(data.toString());
});


return conn;
};


module.exports = {
  connect,
}