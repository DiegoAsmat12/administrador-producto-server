const mongoose = require('mongoose');

const SchemaProducto = new mongoose.Schema({
    titulo:{
        type:String,
        required:[true,"El titulo es obligatorio"]
    },
    precio:{
        type:Number,
        required:[true,"El precio es obligatorio"]
    },
    descripcion:{
        type:String,
        required:[true,"La descripcion es obligatoria"]
    }
})

const Producto = mongoose.model("productos",SchemaProducto);

module.exports = Producto;