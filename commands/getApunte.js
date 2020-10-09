const { MessageEmbed } = require('discord.js');

module.exports = {

	name: 'getApunte',
	description: 'get the apunte',
	execute(message, args) {

        const embed = new MessageEmbed()
            .setTitle('APUNTE: Recursos')
            .setColor('ORANGE')
            .setDescription('https://docs.google.com/document/d/1n5zrD9G2BMEi-B-B6unI4cZGUC74a9IoIGAd_WYbLb4/edit');

		message.channel.send(embed);
	},
};