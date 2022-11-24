// Should return the page downloaded after this command
// node fetcher.js http://www.example.edu/ ./index.html
const fs = require('fs');
const request = require('request');

const fetchHTML = (webpage, fileLocation) => request(webpage, (error, response, body) => {
  console.log('requestBody: ', body);
  console.log('requestError: ', error);
  console.log('requestStatusCode: ', response && response.statusCode);
  writeToFile(body, fileLocation);
});


const writeToFile = (content, fileLocation) => {
  fs.writeFile(fileLocation, content, err => {
    if (err) {
      return console.error('Error: ', err);
    }
    console.log('\nSuccess! File written!');
  });
};

fetchHTML('http://www.example.edu', './fetchedFile.txt');