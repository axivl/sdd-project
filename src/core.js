/**
 * SDD Project
 * @author Jack Speerin
 * @version 3.0
*/

// Packages
const dotenv = require("dotenv");
const figlet = require("figlet");
dotenv.config();

init()

async function init() {
    console.log(figlet.textSync('SDD', {
        font: 'Larry 3D',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    console.log("[core.js] SDD Project by Jack Speerin - Initialising...");
    require("./http/http");
}