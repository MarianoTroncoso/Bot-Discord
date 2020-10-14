const { MessageEmbed } = require('discord.js');
const Clase = require('../models/clase');

module.exports = {
    name: 'listClase',
	description: 'list all the clases',
    async execute (message,  args) {

        // arreglo de materias
        var materias = (await Clase.find({}).select('materia -_id')).map( x => x.materia)
        
        // console.log(materias.length > 0)

        if(!materias.length > 0){
            materias = 'ninguna'
        }

        const embed = new MessageEmbed()
            .setTitle('Hay CLASES disponibles para las materias:')
            .setColor('PURPLE')
            .setDescription(materias);

        message.channel.send(embed);
    }
    
}