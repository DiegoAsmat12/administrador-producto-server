const express = require("express");

const ProductoRouter = express.Router();

const ControladorProducto = require('./../controladores/producto.controller');

ProductoRouter.get("",ControladorProducto.obtenerProductos);
ProductoRouter.get("/:id",ControladorProducto.obtenerProductoPorId);
ProductoRouter.post("",ControladorProducto.agregarProducto);

module.exports = ProductoRouter;