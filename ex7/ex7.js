const fs = require('fs');

const filePath = 'example.txt';
const fileContent = 'My name is Arshya ';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully !');
  }
});
