// establishes a connection with the game server

const conn = require("./play");




const connect = function () {

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

    conn.on("data", (data) => {
    console.log(data.toString());
  });


  return conn;
};


module.exports = connect
module.exports = conn