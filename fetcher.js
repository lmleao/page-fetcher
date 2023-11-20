//function should download data from URL provided and install it into the local file path
const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  if (response && response.statusCode === 200) {
    //Assuming 1 character = 1 byte:
    const fileSize = body.length;

    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.log('Error:', error);
      } else {
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`);
      }
    });
  } else {
    console.log('Failed to download data. Status code:', response && response.statusCode);
  }
});