const Producto = require("../modelos/producto.model");

const agregarProducto = (request,response) =>{
    const {titulo,precio,descripcion} = request.body;

    if(titulo&&precio&&descripcion){
        const nuevoProducto={
            titulo,precio,descripcion
        };

        Producto.create(nuevoProducto)
            .then(productoCreado =>{
                return response.status(201).json(productoCreado);
            })
            .catch( err =>{
                response.statusMessage = "Hubo un error al agregar el producto. "+err;
                return response.status(400).end();
            })
    }
    else{
        response.statusMessage = "Para crear un producto es necesario mandar el 'título', 'precio' y la 'descripción.";
        return response.status(406).end();
    }
}

const obtenerProductos = (request,response) =>{
    Producto.find()
        .then(listaProductos =>{
            return response.status(200).json(listaProductos);
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al intener obtener los productos de la base de datos. "+err;
            return response.status(400).end();
        })
}

const ControladorProducto = {
    obtenerProductos,
    agregarProducto
}

module.exports = ControladorProducto;