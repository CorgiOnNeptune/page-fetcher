// Should return the page downloaded after this command
// node fetcher.js http://www.example.edu/ ./index.html

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');
const request = require('request');
const dir = process.cwd();

const fetchHTML = (webpage, fileLocation) => request(webpage, (error, response, body) => {
  if (error) {
    console.log('URL is invalid, unable to get response.');
    process.exit();
  }

  writeToFile(body, fileLocation, webpage);
});


const writeToFile = (content, fileLocation, webpage) => {
  fs.writeFile(fileLocation, content, err => {
    if (err) {
      console.error('Write Error: file path is invalid');
      process.exit();
    }
    console.log(`\nSuccess!\nFile written from ${webpage}\nDownloaded ${(content.length / 1000).toFixed(2)}MB to ${dir}${fileLocation}\n`);
    process.exit();
  });
};

const args = process.argv.slice(2);
fetchHTML(args[0], args[1]);