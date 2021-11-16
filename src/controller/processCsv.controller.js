
export const processCsv = () => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream('data/data.csv')
      .pipe(csv({ separator: ',' }))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results[0]);
        console.log(results.length);
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      })
  });
}