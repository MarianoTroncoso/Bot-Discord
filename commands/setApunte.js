const { MessageEmbed } = require('discord.js');
const Apunte = require('../models/apunte');

module.exports = {

	name: 'setApunte',
	description: 'set the apunte',
	execute(message, args) {

        // console.log(args)

        const newApunte = new Apunte({
            materia: args[2],
            url: args[3]
        })

        newApunte.save()
            .then(() => console.log('Apunte guardado!'))
            .catch( err => console.log(err))

        const embed = new MessageEmbed()
            .setTitle('APUNTE GUARDADO: ' + args[2])
            .setColor('ORANGE')
            .setDescription(args[3]);

		message.channel.send(embed);
	},
};