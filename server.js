const express = require("express");
const ProductoRouter = require("./rutas/producto.route");
const cors = require('cors');
require('./config/config');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/productos",ProductoRouter);

app.listen(8080, () =>{
    console.log("El servidor se encuentra activo en el puerto 8080");
});