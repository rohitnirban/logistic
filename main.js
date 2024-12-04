const dgram = require('dgram');
const fs = require('fs');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
    console.error(`Server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`Message received: ${msg}`);
    const message = msg.toString();

    // Initialize data object with default values
    const data = {
        ax: 0,
        ay: 0,
        az: 0,
        gx: 0,
        gy: 0,
        gz: 0
    };

    // Extract acceleration and gyroscope data
    let validData = false;

    const accelerationMatch = message.match(/Acceleration: ([\d\-.]+), ([\d\-.]+), ([\d\-.]+)/);
    if (accelerationMatch) {
        data.ax = parseFloat(accelerationMatch[1]) || 0;
        data.ay = parseFloat(accelerationMatch[2]) || 0;
        data.az = parseFloat(accelerationMatch[3]) || 0;
        validData = true;
    }

    const gyroscopeMatch = message.match(/Gyroscope: ([\d\-.]+), ([\d\-.]+), ([\d\-.]+)/);
    if (gyroscopeMatch) {
        data.gx = parseFloat(gyroscopeMatch[1]) || 0;
        data.gy = parseFloat(gyroscopeMatch[2]) || 0;
        data.gz = parseFloat(gyroscopeMatch[3]) || 0;
        validData = true;
    }

    // Write data only if valid data is extracted
    if (validData) {
        fs.writeFile('public/data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('Data saved to data.json:', data);
            }
        });
    } else {
        console.warn('No valid data found in the message. File not updated.');
    }
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
});

// Bind to a specific port
server.bind(41234);
