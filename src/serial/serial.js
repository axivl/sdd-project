// Serial port code sourced from https://medium.com/@machadogj/arduino-and-node-js-via-serial-port-bcf9691fab6a

const { SerialPort } = require("serialport");
let path = ''
let ArduinoPort = ''

// Promise approach
SerialPort.list().then(ports => {
  let done = false
  let count = 0
  let allports = ports.length
  ports.forEach(function(port) {
    count = count+1
    pm  = port.manufacturer

    if (typeof pm !== 'undefined' && pm.includes('arduino')) {
      path = port.path
      ArduinoPort = new SerialPort({path: path, baudRate: 9600 })
      ArduinoPort.on('open', function(){
        console.log(`connected! arduino is now connected at port ${path}`)
      })
      done = true
    }

    if(count === allports && done === false){
      console.log(`can't find any arduino`)
    }
  })
})
// Read the port data


module.exports = {
  async update(data) {
    ArduinoPort.write(data);
  },
};
