const sharp = require('sharp');


const shortbreadClose = 'src/images/shortbread-close.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadClose)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/shortbread-close-${size}.webp`)
        .then(() => console.log(`Creada: shortbread-close-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const shortbreadMini = 'src/images/shortbread-mini.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadMini)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/shortbread-mini-${size}.webp`)
        .then(() => console.log(`Creada: shortbread-mini-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const escociaMar = 'src/images/escocia-mar.jpg';
[800, 1200, 1600].forEach(size => {
    sharp(escociaMar)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/escocia-mar-${size}.webp`)
        .then(() => console.log(`Creada: escocia-mar-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const shortbreadCocina = 'src/images/shortbread-cocina.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadCocina)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/shortbread-cocina-${size}.webp`)
        .then(() => console.log(`Creada: shortbread-cocina-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const shortbreadGalletas = 'src/images/shortbread-galletas.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadGalletas)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/shortbread-galletas-${size}.webp`)
        .then(() => console.log(`Creada: shortbread-galletas-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const shortbreadCloseJpg = 'src/images/shortbread-close.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadCloseJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/shortbread-close-${size}.jpg`)
        .then(() => console.log(`Creada: shortbread-close-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const shortbreadCocinaJpg = 'src/images/shortbread-cocina.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadCocinaJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/shortbread-cocina-${size}.jpg`)
        .then(() => console.log(`Creada: shortbread-cocina-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const shortbreadGalletasJpg = 'src/images/shortbread-galletas.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadGalletasJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/shortbread-galletas-${size}.jpg`)
        .then(() => console.log(`Creada: shortbread-galletas-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const clootie = 'src/images/clootie-dumpling.jpg';
[400, 800].forEach(size => {
    sharp(clootie)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/clootie-dumpling-${size}.webp`)
        .then(() => console.log(`Creada: clootie-dumpling-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


const cranachan = 'src/images/cranachan.jpg';
[400, 800].forEach(size => {
    sharp(cranachan)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/cranachan-${size}.webp`)
        .then(() => console.log(`Creada: cranachan-${size}.webp`))
        .catch(err => console.error('Error:', err));
});



const haggis = 'src/images/haggis.jpg';
[400, 800].forEach(size => {
    sharp(haggis)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/haggis-${size}.webp`)
        .then(() => console.log(`Creada: haggis-${size}.webp`))
        .catch(err => console.error('Error:', err));
});


[400, 800].forEach(size => {
    sharp(haggis)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/haggis-${size}.jpg`)
        .then(() => console.log(`Creada: haggis-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const cullenSkink = 'src/images/cullen-skink.jpg';
[400, 800].forEach(size => {
    sharp(cullenSkink)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(`src/images-webp/cullen-skink-${size}.webp`)
        .then(() => console.log(`Creada: cullen-skink-${size}.webp`))
        .catch(err => console.error('Error:', err));
});

[400, 800].forEach(size => {
    sharp(cullenSkink)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/cullen-skink-${size}.jpg`)
        .then(() => console.log(`Creada: cullen-skink-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const scotchPieMiniJpg = 'src/images/scotch-pie-mini.jpg';
[400, 800].forEach(size => {
    sharp(scotchPieMiniJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/scotch-pie-mini-${size}.jpg`)
        .then(() => console.log(`Creada: scotch-pie-mini-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const shortbreadMiniJpg = 'src/images/shortbread-mini.jpg';
[400, 800].forEach(size => {
    sharp(shortbreadMiniJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/shortbread-mini-${size}.jpg`)
        .then(() => console.log(`Creada: shortbread-mini-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const cranachanJpg = 'src/images/cranachan.jpg';
[400, 800].forEach(size => {
    sharp(cranachanJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/cranachan-${size}.jpg`)
        .then(() => console.log(`Creada: cranachan-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const clootieJpg = 'src/images/clootie-dumpling.jpg';
[400, 800].forEach(size => {
    sharp(clootieJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/clootie-dumpling-${size}.jpg`)
        .then(() => console.log(`Creada: clootie-dumpling-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const escociaMarJpg = 'originales/escocia-mar.jpg';
[800, 1200, 1600].forEach(size => {
    sharp(escociaMarJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/escocia-mar-${size}.jpg`)
        .then(() => console.log(`Creada: escocia-mar-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});


const shortbreadVariedadJpg = 'originales/shortbread-variedad.jpg';
[400, 800, 1200].forEach(size => {
    sharp(shortbreadVariedadJpg)
        .resize({ width: size })
        .jpeg({ quality: 80 })
        .toFile(`src/images/shortbread-variedad-${size}.jpg`)
        .then(() => console.log(`Creada: shortbread-variedad-${size}.jpg`))
        .catch(err => console.error('Error:', err));
});