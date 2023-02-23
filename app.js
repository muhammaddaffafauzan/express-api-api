const express= require('express');
const bodyParser = require('body-parser');
const app = express();
// definisi enviroment secara global (.env)
require('dotenv').config();

// convert data ke json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// memanggil route karyawan
const appRoute = require('./src/routes');
app.use('/', appRoute);

// menjalankan server sesuai dengan port yang terdafar di env. (8080)
app.listen(process.env.APP_PORT, () => {
    console.log(`server berjalan http://localhost:${process.env.APP_PORT}`)
});