// Serial port code sourced from https://medium.com/@machadogj/arduino-and-node-js-via-serial-port-bcf9691fab6a

const SerialPort = require("serialport");
    const Readline = require("@serialport/parser-readline");
    const port = new SerialPort("/dev/ttyACM0", { baudRate: 9600 });
    const parser = port.pipe(new Readline({ delimiter: "\n" }));
    // Read the port data
    port.on("open", () => {
  console.log("serial port open");
});

module.exports = {
  update(data) {
    port.write(data)
    port.write("😊")
  },
};
