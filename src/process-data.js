const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data/data.csv')
  .pipe(csv({ separator: ',' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results[0]);
    console.log(results.length);
  });