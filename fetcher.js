const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('GET error:', error); // Print the error if one occurred
    return false;
  }

  if (response) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.error('Write to file error:', error); // Print the error if one occurred
        return false;
      } else {
        console.log(
          `Downloaded and saved ${body.length} bytes to ${localFilePath}`
        );
        return true;
      }
    });
  }
});
