const { MessageEmbed } = require('discord.js');
const Apunte = require('../models/apunte');

module.exports = {

	name: 'getApunte',
	description: 'get the apunte',
	async execute (message,  args) {

        // console.log(args)

        // arreglo de materias
        const materias = (await Apunte.find({}).select('materia -_id')).map( x => x.materia)
        
        if(materias.includes(args[2])){
            // la materia existe en la bd 

            // hago la consulta
            const actual = await Apunte.find({materia: args[2]})

            const embed = new MessageEmbed()
            .setTitle('APUNTE: ' + args[2])
            .setColor('ORANGE')
            .setDescription(actual[0].url);

		    message.channel.send(embed);
        } else {
            const embed = new MessageEmbed()
            .setTitle('MATERIA NO VÁLIDA')
            .setColor('RED')
            message.channel.send(embed);
        }
	}
};