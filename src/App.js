const fs = require('fs');
const express = require('express');
const app = express();

// Number of files to be created
const numFiles = 3500; // replace with your desired number

app.get('/', (req, res) => {
    res.send('Static web app is running!');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
    buildFiles(numFiles);
});

function buildFiles(num) {
    for(let i = 1; i <= num; i++) {
        const content = `<html><body><h1>This is file number ${i}</h1></body></html>`;
        fs.writeFile(`./public/file${i}.html`, content, err => {
            if(err) {
                return console.log(err);
            }
            console.log(`file${i}.html was saved!`);
        });
    }
}