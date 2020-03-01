const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema =  new Schema({
    descripcion: {
        type:String, 
        unique: true,
        required: [true, 'En nombre es necesario']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});


categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser Único.'});

module.exports = mongoose.model('Categoria', categoriaSchema);