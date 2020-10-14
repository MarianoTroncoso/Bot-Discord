const { MessageEmbed } = require('discord.js');
const Apunte = require('../models/apunte');

module.exports = {
    name: 'listApunte',
	description: 'list all the apuntes',
    async execute (message,  args) {

        // arreglo de materias
        var materias = (await Apunte.find({}).select('materia -_id')).map( x => x.materia)

        if(!materias.length > 0){
            materias = 'ninguna'
        }

        const embed = new MessageEmbed()
            .setTitle('Hay APUNTES disponibles para las materias:')
            .setColor('PURPLE')
            .setDescription(materias);

        message.channel.send(embed);
    }
    
}