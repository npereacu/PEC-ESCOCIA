const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/images';
const outputDir = './src/images-webp';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(() => console.log(`Convertido: ${file} -> ${path.basename(outputPath)}`))
            .catch(err => console.error(`Error con ${file}:`, err));
    }
});
