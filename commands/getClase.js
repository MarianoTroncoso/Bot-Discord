const { MessageEmbed } = require('discord.js');

module.exports = {

	name: 'getClase',
	description: 'get the clase',
	execute(message, args) {

        console.log(args)

        const embed = new MessageEmbed()
            .setTitle('CLASE: Recursos')
            .setColor('BLURPLE')
            .setDescription('NO IMPLEMENTANDO AUN');

		message.channel.send(embed);
	},
};