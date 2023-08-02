import express from 'express';
import multer from 'multer';
import routerProducts from './routers/products.js';
import config from './config.js';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const destinationFolder = './public/img/products';
        callback(null, destinationFolder);
    },
    filename: function (req, file, callback) {
        const error = null;

        // Para cambiarle el nombre por otro 

        // Obtiene la extensión del archivo
        const extension = file.originalname.split('.').pop();
        // Usa Date.now() dividido por 10k redondeado para generar un nombre único y agrega la extensión;
        const uniqueSuffix = 'product_' + Math.floor(Date.now() / 10000) + '.' + extension.toLowerCase(); 
        callback(error, `${uniqueSuffix}`);
    }
});

const fileFilter = (req, file, callback) => {
    const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
    const mimeTypeIsOk = validMimeTypes.includes(file.mimetype);
    callback(null, mimeTypeIsOk);
};

const upload = multer({ storage, fileFilter });

const app = express();
const PORT = config.PORT;
const publicFolderPath = 'public';
const uploadRoute = '/upload';
const productsRoute = '/api/products';

app.use(express.static(publicFolderPath, { extensions: ['html', 'htm'] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post(uploadRoute, upload.single('mainPhoto'), (req, res) => {
    if (req.file) {
        res.send(`
            <h1>¡Gracias!</h1>
            <h2><a href="/#/create" title="alta">Volver</a></h2>
            <p>Archivo subido con éxito.</p>
            <img src="img/products/${req.file.filename}" alt="Imagen">
            <h2><a href="/#/create" title="alta">Volver</a></h2>
        `);
    } else {
        res.status(415).send('<h1>Se produjo un error.</h1>');
    }
});

app.use(productsRoute, routerProducts);

const startServer = () => {
    const server = app.listen(PORT, () => {
        console.log(`Servidor Express escuchando en el puerto ${PORT}.`);
    });
    server.on('error', error => {
        console.log('No se pudo iniciar Express: ', error);
    });
};

startServer();

