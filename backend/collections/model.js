var mongoose = require('mongoose');

const datosSchema = new mongoose.Schema({
    _id:       {type: String},
    platillo:  {type: String },
    precio:    {type: String},
    fecha:     {type: String},
});

module.exports = mongoose.model('historial', datosSchema, "historial");