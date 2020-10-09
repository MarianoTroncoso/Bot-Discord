const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const claseSchema = new Schema({
    materia:{
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    url:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        default: 'no necesaria'
    }
},
{
    timestamps: true
})

const Clase = mongoose.model('Clase', claseSchema);

module.exports = Clase