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
            response.statusMessage = "Hubo un error al intentar obtener los productos de la base de datos. "+err;
            return response.status(400).end();
        })
}

const obtenerProductoPorId = (request,response) =>{
    const _id = request.params.id;

    Producto.findById({_id})
        .then(productoObtenido => {
            return response.status(200).json(productoObtenido);
        })
        .catch(err => {
            response.statusMessage="Hubo un error al intentar obtener el producto de la base de datos. "+err;
            return response.status(400).end();
        });
}

const actualizarProducto = (request,response) =>{
    const _id = request.params.id;
    const {titulo,precio,descripcion} = request.body;
    const productoActualizado = {
        titulo,precio,descripcion
    };
    Producto.findByIdAndUpdate({_id},{$set:productoActualizado},{new:true})
        .then ((producto) =>{
            return response.status(202).json(producto);
        })
        .catch( err => {
            response.statusMessage="Hubo un error al ejecutar el update. "+err;
            return response.status(400).end();
        })
}

const eliminarProducto = (request,response) =>{
    const _id =request.params.id;
    Producto.deleteOne({_id})
        .then(() =>{
            return response.status(204).end();
        })
        .catch( err =>{
            response.statusMessage="Hubo un error al ejecutar el delete. "+err;
            return response.status(400).end();
        })
}


const ControladorProducto = {
    obtenerProductos,
    agregarProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
}

module.exports = ControladorProducto;