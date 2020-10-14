const { MessageEmbed } = require('discord.js');
const Clase = require('../models/clase');

module.exports = {

	name: 'getClase',
	description: 'get the clase',
	async execute (message,  args) {

        // console.log(args)

        // arreglo de materias
        const materias = (await Clase.find({}).select('materia -_id')).map( x => x.materia)
        
        if(materias.includes(args[2])){
            // la materia existe en la bd 

             // hago la consulta
            const actual = await Clase.find({materia: args[2]})

            const embed = new MessageEmbed()
            .setTitle('CLASE: ' + args[2])
            .setColor('ORANGE')
            .setDescription('link: ' + actual[0].url + '\n' + 'pass: ' + actual[0].pass);

		    message.channel.send(embed);
        } else {
            const embed = new MessageEmbed()
            .setTitle('Materia no válida')
            .setColor('RED')
            .addField('Para conocer materias disponibles utilizar el comando: ', '!list clase');
            message.channel.send(embed);
        }
	}
};