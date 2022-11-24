// Should return the page downloaded after this command
// node fetcher.js http://www.example.edu/ ./index.html
const fs = require('fs');
const request = require('request');
const dir = process.cwd();

const fetchHTML = (webpage, fileLocation) => request(webpage, (error, response, body) => {
  console.log('requestBody:', body);
  console.log('requestError:', error);
  console.log('requestStatusCode:', response && response.statusCode);
  writeToFile(body, fileLocation);
  if (!error) {
    console.log(`\nSuccess!\nFile written from ${webpage}\nTo ${dir}${fileLocation}\n`);
  }
});


const writeToFile = (content, fileLocation) => {
  fs.writeFile(fileLocation, content, err => {
    if (err) {
      return console.error('Write Error: ', err);
    }
  });
};

fetchHTML('http://www.example.edu', './fetchedFile.txt');