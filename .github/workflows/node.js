const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('input.json', 'utf8');

// Parse the JSON file
const jsonData = JSON.parse(data);

// Get the keys and values and output them as environment variables
for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        console.log(`::set-env name=${key}::${jsonData[key]}`);
    }
}
