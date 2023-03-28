/**
 * SDD Project - HTTP
 * @author Jack Speerin
 * @version 3.0
*/

// Packages
const express = require('express');
const path = require('path');
const app = express();
const serial = require("../serial/serial")

var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(3000);
app.use("/files", express.static(path.join(__dirname + "/files")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})

app.post('/submit', urlencodedParser, function(req,res) {
    let load = req.body.load;
    serial.update(load);
    res.send("OK");
})
