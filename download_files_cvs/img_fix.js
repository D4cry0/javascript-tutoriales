const fs = require('fs');
const csv = require('csv-parser');

// async function main() {
//   // enter to the directory where the images are stored that is cdn
//   // you need to go through all the directories and subdirectories
//   // and remove the images name that contains ?

//   const outputDirectory = 'cdn/';
//   const files = fs.readdirSync(outputDirectory);

//   files.forEach(file => {
//     const path = `${outputDirectory}/${file}`;
//     const stats = fs.statSync(path);

//     if (stats.isDirectory()) {
//       const subFiles = fs.readdirSync(path);

//       subFiles.forEach(subFile => {
//         // rename the file if it contains ?
//         if (subFile.includes('?')) {
//           const newPath = `${path}/${subFile.split('?')[0]}`;
//           fs.renameSync(`${path}/${subFile}`, newPath);
//           console.log(`File renamed: ${subFile} -> ${newPath}`);
//         }
//       });
//     }
//   });
// }

async function main() {
  const inputFile = './shopify_img.csv';

  // find duplicates in the csv file the column SKU
  const skus = [];
  const duplicates = [];

  await new Promise((resolve, reject) => {
    fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      if (skus.includes(row.SKU)) {
        duplicates.push(row.SKU);
      } else {
        skus.push(row.SKU);
      }
    })
    .on('end', () => {
      console.log('Proceso de lectura del CSV completado');
      resolve();
    })
    .on('error', (error) => {
      reject(error);
    });

    console.log('SKUs duplicados:', duplicates);

    resolve();

  });

}

main();