const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apunteSchema = new Schema({
    materia:{
        type: String,
        required: true,
        minlength: 2
    },
    url:{
        type: String,
        default: 'nada por ahora...'
    },
    tipo:{
        type: String, 
        default: 't',
        maxlength: 1
    }
},
{
    timestamps: true
})

const Apunte = mongoose.model('Apunte', apunteSchema);

module.exports = Apunte