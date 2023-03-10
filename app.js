//----------REQUERIMIENTOS-------------------------------------
const express = require("express"); //Traigo la libreria express
const app = express(); //Utilizo express
const path = require("path"); //traigo path
//---const methodOverride = require('method-override'); //utilizar el metodo put y delete 
//---const session = require('express-session');
// const auditoriaUnoMiddleware = require('./src/middlewares/auditoriaUNO'); //importo middleware
//---const multer= require("multer");
//---const {check} = require("express-validator");
//-------------------------IMPORTACION ENRUTADORES------------------------------------------------------
//---const productsRouter = require("./src/routes/productosRouters"); //se trae el enrutador
//---const usersRouters = require("./src/routes/usersRouters"); //se trae el enrutador
//---const cookieParser = require("cookie-parser");
//----------------MIDDLEWARES-----------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, './public')));//vuelve publica la carpeta public
app.use(express.urlencoded({extended:false})); // utilizar el metodo POST
app.use(express.json()); // utilizar el mtodo post
//---app.use(methodOverride('_method')); //utilizar el metodo put y delete 
//---app.use(session( {secret: "Este es mi secreto"} )); 
//---app.use(cookieParser());

//---------------------------------------------------------------------------------
app.get('/mostrar_mensaje', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.ejs')); // Permite enviar un archivo HTML
    });
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor corriendo en el puerto "));


module.exports = app
