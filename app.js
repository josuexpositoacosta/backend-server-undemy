//Requires
var express = require('express');
var mongoose = require('mongoose');

//const uri = "mongodb://0.0.0.0:27017/";
//const client = new MongoClient(uri);

//Inicializar variables
var app = express();

//Conexion a la base de datos
mongoose.connection.openUri('mongodb://0.0.0.0:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
});


//Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});