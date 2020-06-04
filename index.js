const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({ dest: './dist/'});


const PORT = process.env.PORT || 8080;

app.get('/routes/:id', upload.single('dist'),(req, res)=> res.status(204).end());

app.use(express.static('dist'));

app.listen(PORT, () => console.log('Server has been started'));
