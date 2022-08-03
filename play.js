const { connect } = require("./client");
const {   setupInput   } = require("./input");
// const net = require("./client");


console.log("Connecting ...");



setupInput(connect());
