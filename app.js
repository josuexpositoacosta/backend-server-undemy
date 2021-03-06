//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//const uri = "mongodb://0.0.0.0:27017/";
//const client = new MongoClient(uri);

//Inicializar variables
var app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Importar Rutas
var appRoutes = require('./routes/app');
var UsuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


//Conexion a la base de datos
mongoose.connection.openUri('mongodb://0.0.0.0:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de Datos: \x1b[32m%s\x1b[0m', 'online');
});

//Serve Index Config
//var serveIndex = require('serve-index');
//app.use(express.static(__dirname + '/'));
//app.use('/uploads', serveIndex(__dirname + '/uploads'));


//Rutas
app.use('/usuario', UsuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});