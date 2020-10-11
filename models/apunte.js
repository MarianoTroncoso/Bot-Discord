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
    }
},
{
    timestamps: true
})

const Apunte = mongoose.model('Apunte', apunteSchema);

module.exports = Apunte