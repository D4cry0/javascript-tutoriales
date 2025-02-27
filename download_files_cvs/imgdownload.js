// const fs = require('fs');
// const csv = require('csv-parser');
// const axios = require('axios');
// const path = require('path');

// const inputFile = './shopify_img.csv';
// const outputDirectory = 'cdn/';
// let endLoop = false;

// fs.createReadStream(inputFile)
//   .pipe(csv())
//   .on('data', async (row) => {

//     console.log('Procesando fila:', row);

//     let sku = row['SKU'];
//     const imageUrl = row['URLIMG'];
//     const position = row['POS'];

//     // Si el SKU está vacío, utiliza el SKU de la primera fila del grupo
//     if (!sku && currentSku) {
//       sku = currentSku;
//     }

//     // Si el SKU no está vacío, actualiza el SKU actual
//     if (sku) {
//       currentSku = sku;
//     }

//     if (!currentSku) {
//       console.error('Error: No se encontró un SKU para la imagen');
//       return;
//     }

//     const imageExtension = path.extname(imageUrl);
//     const folderPath = `${outputDirectory}/${currentSku}`;

//     if (!fs.existsSync(folderPath)) {
//       fs.mkdirSync(folderPath, { recursive: true });
//     }

//     try {
//       const imagePath = `${folderPath}/${currentSku}_${position}${imageExtension}`;
//       await downloadImage(imageUrl, imagePath);
//       console.log(`Imagen ${currentSku}_${position}${imageExtension} descargada para SKU ${currentSku}`);
//     } catch (error) {
//       console.error(`Error al descargar imagen para SKU ${currentSku}:`, error);
//     }
//   })
//   .on('end', () => {
//     console.log('Proceso completado');
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

// let currentSku = null;

// async function downloadImage(url, imagePath) {
//   const response = await axios({
//     url,
//     method: 'GET',
//     responseType: 'stream',
//   });

//   return new Promise((resolve, reject) => {
//     response.data
//       .pipe(fs.createWriteStream(imagePath))
//       .on('finish', () => {
//         resolve();
//       })
//       .on('error', (error) => {
//         reject(error);
//       });
//   });
// }

const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');
const path = require('path');

const inputFile = './shopify_img.csv';
const outputDirectory = 'cdn/';

async function main() {
  const imagePromises = [];
  let currentSku = null;

  await new Promise((resolve, reject) => {
    fs.createReadStream(inputFile)
      .pipe(csv())
      .on('data', async (row) => {
        let sku = row['SKU'];
        const imageUrl = row['URLIMG'];
        const position = row['POS'];

        // Si el SKU está vacío, utiliza el SKU de la primera fila del grupo
        if (!sku && currentSku) {
          sku = currentSku;
        }

        // Si el SKU no está vacío, actualiza el SKU actual
        if (sku) {
          currentSku = sku;
        }

        if (!currentSku) {
          console.error('Error: No se encontró un SKU para la imagen');
          return;
        }

        const imageExtension = path.extname(imageUrl.split('?')[0]);
        const folderPath = `${outputDirectory}/${currentSku}`;

        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }

        const imagePath = `${folderPath}/${currentSku}_${position}${imageExtension}`;
        const imagePromise = downloadImage(imageUrl, imagePath);
        imagePromises.push(imagePromise);
      })
      .on('end', () => {
        console.log('Proceso de lectura del CSV completado');
        resolve();
      })
      .on('error', (error) => {
        console.error('Error al leer el archivo CSV:', error);
        reject(error);
      });
  });

  console.log('Esperando a que todas las descargas de imágenes finalicen...');
  await Promise.all(imagePromises);
  console.log('Todas las descargas de imágenes han finalizado.');
}

async function downloadImage(url, imagePath) {
  try {
    if (!fs.existsSync(imagePath)) {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
      });

      return new Promise((resolve, reject) => {
          response.data
          .pipe(fs.createWriteStream(imagePath))
          .on('finish', () => {
              console.log('Imagen descargada:', imagePath);
              resolve();
          })
          .on('error', (error) => {
              console.error('Error al descargar imagen:', error);
              reject(error);
          });
      });
    }
  } catch (error) {
    console.error("No se descargo: " + url);
  }
}

main()
  .then(() => {
    console.log('Proceso completado');
  })
  .catch((error) => {
    console.error('Error en el proceso:', error);
  });

